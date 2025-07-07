"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Calendar,
  Mail,
  MessageSquare,
  Brain,
  Zap,
  Phone,
  Clock,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Assistant
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="#features"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#process"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Process
            </Link>
            <Link href="/schedule">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* @ts-ignore */}
          <motion.div {...fadeInUp}>
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200 hover:from-blue-200 hover:to-purple-200 transition-all duration-300">
              🤖 Meet Your Smart AI Assistant
            </Badge>
          </motion.div>

          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight"
          >
            Your 24/7 Business
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Assistant
            </span>
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Imagine having a 24/7 assistant who can talk to your customers, book
            appointments, send emails or texts, and even remember your business
            information—all in real time.
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/schedule">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group"
              >
                Schedule Live Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg border-2 hover:bg-slate-50 transition-all duration-300 bg-transparent"
                >
                  Watch Demo Video
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0">
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="AI Assistant Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          {/* @ts-ignore */}
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Let me walk you through how I can help you grow your business,
              save time, and delight your customers.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: MessageSquare,
                title: "Talk Like a Human",
                description:
                  "I can have real conversations with people—just like a real team member. Using advanced voice recognition and natural language processing.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Calendar,
                title: "Handle Your Calendar",
                description:
                  "I can book appointments directly into your Google Calendar. Need to reschedule or check availability? Just ask me.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Mail,
                title: "Send Emails & Texts",
                description:
                  "Whether it's a confirmation message or follow-up, I can send emails via Gmail and SMS updates instantly.",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: Brain,
                title: "Know Your Business",
                description:
                  "I'm like a supercharged support agent who knows your services, hours, policies, and can answer customer questions.",
                gradient: "from-orange-500 to-red-500",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* @ts-ignore */}
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700">
              ⚙️ Cutting-Edge Technology
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Built with Premium AI
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Powered by top AI tools like OpenAI and Google. You don't need to
              worry about the tech—everything just works.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              {[
                "Voice recognition",
                "Natural conversation",
                "Smart scheduling",
                "Email & SMS integration",
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg text-slate-700">{tech}</span>
                </motion.div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <Card className="relative bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-8">
                  <Zap className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">
                    Enterprise-Grade AI
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    You focus on running your business. I'll take care of the
                    conversations with state-of-the-art AI technology.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Features Section */}
      <section
        id="process"
        className="py-20 px-6 bg-gradient-to-r from-slate-50 to-blue-50/30"
      >
        <div className="max-w-7xl mx-auto">
          {/* @ts-ignore */}
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700">
              🚀 Implementation Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Complete AI Solution
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From simple chat to full voice automation, we provide everything
              you need for success.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Chat-First Experience",
                description:
                  "Start with simple customer conversations via text messaging and live chat.",
                icon: MessageSquare,
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Voice Integration",
                description:
                  "Advanced voice recognition for phone calls and voice chat on your website.",
                icon: Phone,
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Smart Calendar",
                description:
                  "Automatic appointment management with Google Calendar integration.",
                icon: Calendar,
                gradient: "from-green-500 to-emerald-500",
              },
              {
                title: "Email & SMS Automation",
                description:
                  "Automated follow-ups and customer communication via email and text.",
                icon: Mail,
                gradient: "from-orange-500 to-red-500",
              },
              {
                title: "Real-Time Conversations",
                description:
                  "Full voice automation that talks with customers like a real person.",
                icon: Zap,
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                title: "Business Intelligence",
                description:
                  "AI that knows your business inside and out, ready to help customers.",
                icon: Brain,
                gradient: "from-teal-500 to-cyan-500",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          {/* @ts-ignore */}
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to See It in Action?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Whether you want to see a voice conversation in action, try out
              the scheduling feature, or explore how I'd work for your business,
              I'd be happy to show you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Live Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg transition-all duration-300 bg-transparent"
              >
                <Clock className="mr-2 h-5 w-5" />
                Quick Questions?
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            AI Assistant
          </div>
          <p className="text-slate-400 mb-6">
            Let's build your AI assistant—tailored to you.
          </p>
          <div className="flex justify-center gap-8 text-slate-400">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link
              href="https://x.com/piyushsainii"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
