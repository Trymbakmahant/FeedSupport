"use client";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaCheckCircle, FaEthereum } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { useRouter } from "next/navigation";
import GameBox from "@/components/Sipline/GameBox";
export default function Home() {
  const router = useRouter();
  return (
    <main className="flex  text-primary min-h-screen flex-col items-center justify-between py-24">
      <Navbar />
      <div className="min-h-screen w-full bg-gray-100">
        {/* Hero Section */}
        <header className="bg-green-600  relative flex justify-end h-screen text-white py-20">
          <GameBox />
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Feedsupport</h1>
            <p className="text-xl mb-8">Authentic Feedback, Verified Trust.</p>
            <Button
              onClick={() => {
                router.push("/auth/signup");
              }}
              className="px-6 py-3 bg-white text-green-600 rounded-md"
            >
              Get Started
            </Button>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              Why Choose Feedsupport?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Feature 1 */}
              <div className="p-8 bg-gray-50 rounded-md shadow-md">
                <FaEthereum className="text-green-600 text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Blockchain Verification
                </h3>
                <p>
                  Secure feedback with Ethereum Attestation Service (EAS).
                  Immutable and verifiable responses.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="p-8 bg-gray-50 rounded-md shadow-md">
                <FaGlobe className="text-green-600 text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  User Authentication
                </h3>
                <p>
                  Prevent duplicate submissions with Worldcoin. Ensure feedback
                  is genuine and trustworthy.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="p-8 bg-gray-50 rounded-md shadow-md">
                <FaCheckCircle className="text-green-600 text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Testimonial Generation
                </h3>
                <p>
                  Convert verified feedback into testimonials. Easily embed them
                  on your website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-8">
              Join Feedsupport and start collecting verified feedback today!
            </p>
            <Button
              onClick={() => {
                router.push("/auth/signup");
              }}
              className="px-6 py-3 bg-white text-green-600 rounded-md"
            >
              Sign Up Now
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-800 text-gray-400 text-center">
          <p>&copy; 2024 Feedsupport. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
