//SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { ByteHasher } from './helpers/ByteHasher.sol';
import { IWorldID } from "./interfaces/IWorldID.sol";

contract FeedSupport {
    using ByteHasher for bytes;

    error InvalidNullifier();

    IWorldID internal immutable worldId;

    uint256 internal immutable externalNullifier;

    uint256 internal immutable groupId = 1;
   
    mapping(uint256 => bool) internal nullifierHashes;

    constructor(
        IWorldID _worldId,
        string memory _appId,
        string memory _actionId
    ) {
        worldId = _worldId;
        externalNullifier = abi
            .encodePacked(abi.encodePacked(_appId).hashToField(), _actionId)
            .hashToField();
    }

    function verifyAndExecute(
        address signal,
        uint256 root,
        uint256 nullifierHash,
        uint256[8] calldata proof
    ) public {
        if (nullifierHashes[nullifierHash]) revert InvalidNullifier();

        worldId.verifyProof(
            root,
            groupId,
            abi.encodePacked(signal).hashToField(),
            nullifierHash,
            externalNullifier,
            proof
        );

        nullifierHashes[nullifierHash] = true;
    }
}