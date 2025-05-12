"use client";
import { useState } from "react";
import { ArrowRightIcon, LockIcon, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic
    console.log({ email, password });
  };

  return (
    <>
      <div className="min-h-screen flex">
        {/* Left side - Testimonials */}
        <div className="hidden lg:flex justify-center w-1/2 bg-purple-100 text-center relative">
          <div className="absolute bottom-6 left-6 text-xs text-neutral-600">
            &copy; Snapcast 2025
          </div>
          <div className="max-w-xl flex flex-col justify-center items-center">
            <div className="flex gap-2 pb-8">
              <img src="/star.svg" className="w-6" />
              <img src="/star.svg" className="w-6" />
              <img src="/star.svg" className="w-6" />
              <img src="/star.svg" className="w-6" />
              <img src="/star.svg" className="w-6" />
            </div>
            <div className="space-y-6">
              <Testimonial
                quote="This platform has completely changed how our team collaborates. Incredible product!"
                author="Sarah Johnson"
                role="Product Manager at TechCorp"
              />
            </div>
          </div>
        </div>

        {/* Right side - Sign In Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-black mb-2">Snapcast</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-600 mb-1"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-full"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-neutral-600 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-full transition"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-purple-400 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-neutral-600"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-purple-400">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <button className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-black">
                  Sign in
                </button>
                <button className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-purple-400 hover:bg-purple-500/70">
                  Sign in with Google
                  <img src="/google.svg" className="ml-2 w-4" />
                </button>
              </div>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>
                Don't have an account?{" "}
                <a href="#" className="font-medium text-purple-400">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Testimonial component
function Testimonial({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div>
      <div className="flex">
        <LockIcon className="h-5 w-5 mt-0.5 text-white opacity-70" />
        <p className="font-semibold text-2xl">{quote}</p>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center">
        <Avatar className="mb-2">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-neutral-600">{role}</p>
      </div>
    </div>
  );
}
