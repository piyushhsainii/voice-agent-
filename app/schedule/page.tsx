"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { supabase } from "@/components/supabase/supabase";
import { useState } from "react";
import { toast } from "sonner"; // ✅ Import toast

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function SchedulePage() {
  const [firstName, setfirstName] = useState<string | null>(null);
  const [lastName, setlastName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [company, setCompany] = useState<string | null>(null);
  const [phone, setphone] = useState<string | null>(null);
  const [about_business, setAbout_business] = useState<string | null>(null);

  const submitData = async () => {
    if (!firstName || !lastName || !email || !company || !phone) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      const { data, error } = await supabase.from("form").insert({
        first_name: firstName,
        last_name: lastName,
        email: email,
        company: company,
        phone: phone,
        about_business: about_business,
      });

      if (error) {
        toast.error("Something went wrong while booking the demo.");
      } else {
        toast.success("Demo booked successfully!");
      }
    } catch (error) {
      toast.error("Something went wrong while booking the demo.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Assistant
          </div>
          <div></div>
        </div>
      </motion.nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* @ts-ignore */}
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
              📅 Schedule Your Demo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              See Your AI Assistant
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                In Action
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Choose your preferred demo type and schedule a time that works for
              you. We'll show you exactly how your AI assistant will transform
              your business.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    Book Your Demo Session
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-slate-700">
                        First Name
                      </Label>
                      <Input
                        onChange={(e) => setfirstName(e.target.value)}
                        id="firstName"
                        placeholder="John"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-slate-700">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="mt-1"
                        onChange={(e) => setlastName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-slate-700">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      className="mt-1"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-slate-700">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      className="mt-1"
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-slate-700">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="mt-1"
                      onChange={(e) => setphone(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-slate-700">
                      Tell us about your business (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="What type of business do you run? What are your main challenges with customer communication?"
                      className="mt-1 min-h-[100px]"
                      onChange={(e) => setAbout_business(e.target.value)}
                    />
                  </div>

                  <Button
                    onClick={submitData}
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <Clock className="mr-2 h-5 w-5" />
                    Book a call
                  </Button>

                  <p className="text-sm text-slate-500 text-center">
                    After Booking the call, We'll reach out to you within 24
                    hours.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-green-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    What You'll Get in Your Demo
                  </h3>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      Live demonstration of AI capabilities
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      Customized setup for your business
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      Q&A session with our experts
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      Implementation roadmap
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
