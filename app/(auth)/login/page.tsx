"use client";

import React, { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Logo from "@/components/login/logo";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { LoginAction, State } from "@/lib/actions/login";

function LoginForm() {
  //  initial state
  const initialState: State = {
    message: "",
  };

  const [state, formAction, pending] = useActionState(
    LoginAction,
    initialState,
  );

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-sm">
      {/* Logo + Title */}
      <div className="flex flex-col items-center gap-2">
        <Logo />
        <h1 className="text-[#4A5565] text-center">
          Training and Record Management System
        </h1>
      </div>

      <Card className="w-full max-w-sm">
        <CardContent>
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-[#006022] w-16 h-16 flex items-center justify-center text-white rounded-lg">
              <Shield size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mt-2">Admin (HR) Login</h2>
              <p className="text-gray-500">System administrator login</p>
            </div>
          </div>

          {/* Form */}
          <div className="mb-6">
            <a
              href="http://localhost:8080/auth/google/login"
              className="w-full inline-flex items-center justify-center rounded-md border border-[#006022] px-4 py-2 text-sm font-medium text-[#006022] transition hover:bg-[#E8F7EC]"
            >
              Continue with Google
            </a>
          </div>

          <form action={formAction} className="w-full">
            <FieldGroup>
              <FieldSet>
                {/* Email */}
                <Field>
                  <FieldLabel htmlFor="email">Email Address</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    required
                  />
                  {state.errors?.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {state.errors.email[0]}
                    </p>
                  )}
                </Field>

                {/* Password */}
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    required
                  />
                  {state.errors?.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {state.errors.password[0]}
                    </p>
                  )}
                </Field>
              </FieldSet>

              {/* Global Message */}
              {(!state.errors || Object.keys(state.errors).length === 0) &&
                state.message && (
                  <p className="text-red-500 text-sm text-center">
                    {state.message}
                  </p>
                )}

              {/* Submit Button */}
              <Field>
                <Button
                  type="submit"
                  disabled={pending}
                  className="bg-[#006022] text-white hover:bg-[#005018] w-full"
                >
                  {pending ? "Logging in..." : "Login"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginForm;
