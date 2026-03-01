"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get in touch with us for any inquiries or to request a quotation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">Reach Out to Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Fill in the online form, call us, or email us. We&apos;d love to hear from you.
              </p>

              <div className="flex flex-col gap-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Phone</div>
                    <div className="text-sm text-muted-foreground">+254-770-944-720</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Email</div>
                    <div className="text-sm text-muted-foreground">info@cloveroptions.co.ke</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Address</div>
                    <div className="text-sm text-muted-foreground">Nairobi, Kenya</div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-xl overflow-hidden border border-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819!2d36.818878!3d-1.283198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe29ac07c5f2ff417!2z!5e0!3m2!1sen!2ske!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cleaning Co. Location"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 rounded-xl border border-border"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  <Button className="mt-6" onClick={() => setSubmitted(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="flex flex-col gap-5"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-2">Send Us a Message</h3>

                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your full name" required className="mt-1.5" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="you@example.com" required className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+254 7XX XXX XXX" className="mt-1.5" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="serviceType">Service Type</Label>
                    <Select>
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Cleaning</SelectItem>
                        <SelectItem value="commercial">Commercial Cleaning</SelectItem>
                        <SelectItem value="construction">Post Construction</SelectItem>
                        <SelectItem value="moving">Moving In/Out</SelectItem>
                        <SelectItem value="events">Event Cleaning</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your cleaning needs..." rows={5} required className="mt-1.5" />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
