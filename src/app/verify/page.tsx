"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Employee = {
  code: string;
  name: string;
  role: string;
  achievements: string;
  description: string;
};

export default function EmployeeVerificationPage() {
  const [code, setCode] = useState("");
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setEmployee(null);

    const trimmedCode = code.trim();
    if (!trimmedCode) {
      setError("Enter a verification code before submitting.");
      return;
    }

    setIsLoading(true);

    try {
      // Reach out to the secure API route instead of calling Google Sheets from the client.
      const response = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: trimmedCode }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.error || "Unable to verify the code.");
      }

      setEmployee(payload.employee as Employee);
    } catch (fetchError) {
      const message =
        fetchError instanceof Error ? fetchError.message : "Unexpected error.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#31312f] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl bg-[#F5F5F5]/90 border border-[#C8C8C8]/40 rounded-2xl shadow-xl backdrop-blur-sm p-8 sm:p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#31312f] mb-2">
            Employee Verification
          </h1>
          <p className="text-sm sm:text-base text-[#555]">
            Enter the verification code you received from the NexaWorks team to
            confirm employment details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <label className="block text-sm font-medium text-[#31312f]">
            Verification Code
          </label>
          <Input
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="e.g. NXW-2025-001"
            autoComplete="off"
            aria-invalid={Boolean(error)}
          />
          <Button
            type="submit"
            className="w-full bg-[#31312f] hover:bg-[#1f1f1d] text-[#F5F5F5]"
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "Verify"}
          </Button>
        </form>

        {error && (
          <p className="mt-6 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        {employee && (
          <div className="mt-8 space-y-4 rounded-xl border border-[#D0D0D0] bg-white p-6 text-[#31312f] shadow-sm">
            <div>
              <h2 className="text-xl font-semibold">{employee.name}</h2>
              <p className="text-sm text-[#555]">{employee.role}</p>
            </div>
            {employee.achievements && (
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wide text-[#777]">
                  Achievements
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#404040]">
                  {employee.achievements}
                </p>
              </div>
            )}
            {employee.description && (
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wide text-[#777]">
                  Description
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#404040]">
                  {employee.description}
                </p>
              </div>
            )}
            <div className="text-xs text-[#777]">
              Verification code: <span className="font-mono">{employee.code}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
