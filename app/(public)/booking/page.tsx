"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";

const serviceOptions = [
  { value: "residential", label: "Residential Cleaning", basePrice: 3500 },
  { value: "commercial", label: "Commercial Cleaning", basePrice: 8000 },
  { value: "construction", label: "Post Construction Cleaning", basePrice: 12000 },
  { value: "moving", label: "Moving In/Out Cleaning", basePrice: 5000 },
  { value: "events", label: "Event & After Party Cleaning", basePrice: 7000 },
];

const propertyTypes = ["Apartment", "House", "Office", "Warehouse", "Restaurant", "Retail Store"];
const sizeOptions = ["1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4+ Bedrooms", "Under 100 sqm", "100-300 sqm", "300-500 sqm", "500+ sqm"];
const addonOptions = [
  { id: "carpet", label: "Carpet Cleaning", price: 2000 },
  { id: "window", label: "Window Cleaning", price: 1500 },
  { id: "fumigation", label: "Fumigation", price: 3000 },
  { id: "upholstery", label: "Upholstery Cleaning", price: 2500 },
];

const steps = ["Service", "Property", "Add-ons", "Schedule", "Contact", "Review"];

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    service: "",
    propertyType: "",
    size: "",
    addons: [] as string[],
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    payment: "mpesa",
  });

  const selectedService = serviceOptions.find((s) => s.value === form.service);
  const selectedAddons = addonOptions.filter((a) => form.addons.includes(a.id));
  const totalPrice = (selectedService?.basePrice || 0) + selectedAddons.reduce((sum, a) => sum + a.price, 0);

  const canProceed = () => {
    switch (currentStep) {
      case 0: return !!form.service;
      case 1: return !!form.propertyType && !!form.size;
      case 2: return true;
      case 3: return !!form.date && !!form.time;
      case 4: return !!form.name && !!form.email && !!form.phone;
      default: return true;
    }
  };

  const toggleAddon = (id: string) => {
    setForm((prev) => ({
      ...prev,
      addons: prev.addons.includes(id) ? prev.addons.filter((a) => a !== id) : [...prev.addons, id],
    }));
  };

  if (submitted) {
    return (
      <section className="py-20 lg:py-32 bg-background">
        <div className="mx-auto max-w-lg px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-3">Booking Confirmed!</h1>
            <p className="text-muted-foreground mb-2">Thank you, {form.name}. Your booking has been received.</p>
            <div className="mt-6 p-6 rounded-xl bg-card border border-border text-left">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="text-muted-foreground">Service:</div>
                <div className="font-medium text-foreground">{selectedService?.label}</div>
                <div className="text-muted-foreground">Date:</div>
                <div className="font-medium text-foreground">{form.date}</div>
                <div className="text-muted-foreground">Time:</div>
                <div className="font-medium text-foreground">{form.time}</div>
                <div className="text-muted-foreground">Estimated Price:</div>
                <div className="font-bold text-primary">KES {totalPrice.toLocaleString()}</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">We will confirm your booking via phone shortly.</p>
            <Button className="mt-6" onClick={() => { setSubmitted(false); setCurrentStep(0); setForm({ service: "", propertyType: "", size: "", addons: [], date: "", time: "", name: "", email: "", phone: "", payment: "mpesa" }); }}>
              Book Another Service
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-16 lg:py-20 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Book Your Cleaning Service
          </motion.h1>
          <p className="mt-3 text-muted-foreground">Get an instant estimate and book in minutes.</p>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-background">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          {/* Stepper */}
          <div className="flex items-center justify-between mb-10">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  i <= currentStep ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                }`}>
                  {i < currentStep ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                </div>
                <span className="hidden sm:block text-xs font-medium text-muted-foreground ml-1">{step}</span>
                {i < steps.length - 1 && <div className={`hidden sm:block w-8 lg:w-16 h-px ml-2 ${i < currentStep ? "bg-primary" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          {/* Price Preview */}
          {selectedService && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8 p-4 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-between">
              <span className="text-sm text-foreground">Estimated Price:</span>
              <span className="text-xl font-bold text-primary">KES {totalPrice.toLocaleString()}</span>
            </motion.div>
          )}

          {/* Steps */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="min-h-[250px]"
            >
              {currentStep === 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Select a Service</h2>
                  <div className="grid grid-cols-1 gap-3">
                    {serviceOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setForm((p) => ({ ...p, service: opt.value }))}
                        className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                          form.service === opt.value ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/30"
                        }`}
                      >
                        <span className="font-medium text-foreground">{opt.label}</span>
                        <span className="text-sm text-primary font-semibold">From KES {opt.basePrice.toLocaleString()}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Property Details</h2>
                  <div className="flex flex-col gap-5">
                    <div>
                      <Label>Property Type</Label>
                      <Select value={form.propertyType} onValueChange={(v) => setForm((p) => ({ ...p, propertyType: v }))}>
                        <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select property type" /></SelectTrigger>
                        <SelectContent>
                          {propertyTypes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Size</Label>
                      <Select value={form.size} onValueChange={(v) => setForm((p) => ({ ...p, size: v }))}>
                        <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select size" /></SelectTrigger>
                        <SelectContent>
                          {sizeOptions.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Add-ons (Optional)</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {addonOptions.map((addon) => (
                      <button
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${
                          form.addons.includes(addon.id) ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/30"
                        }`}
                      >
                        <Checkbox checked={form.addons.includes(addon.id)} className="pointer-events-none" />
                        <div>
                          <div className="font-medium text-foreground text-sm">{addon.label}</div>
                          <div className="text-xs text-primary">+KES {addon.price.toLocaleString()}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Pick Date & Time</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input id="date" type="date" value={form.date} onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))} className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select value={form.time} onValueChange={(v) => setForm((p) => ({ ...p, time: v }))}>
                        <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select time" /></SelectTrigger>
                        <SelectContent>
                          {["07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"].map((t) => (
                            <SelectItem key={t} value={t}>{t}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Your Contact Info</h2>
                  <div className="flex flex-col gap-5">
                    <div>
                      <Label htmlFor="bname">Full Name</Label>
                      <Input id="bname" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder="Your full name" className="mt-1.5" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="bemail">Email</Label>
                        <Input id="bemail" type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} placeholder="you@example.com" className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="bphone">Phone</Label>
                        <Input id="bphone" type="tel" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} placeholder="+254 7XX XXX XXX" className="mt-1.5" />
                      </div>
                    </div>
                    <div>
                      <Label>Payment Method</Label>
                      <div className="grid grid-cols-2 gap-3 mt-1.5">
                        {[{ value: "mpesa", label: "M-Pesa" }, { value: "card", label: "Card" }].map((pm) => (
                          <button
                            key={pm.value}
                            onClick={() => setForm((p) => ({ ...p, payment: pm.value }))}
                            className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                              form.payment === pm.value ? "border-primary bg-primary/5 text-primary" : "border-border bg-card text-muted-foreground hover:border-primary/30"
                            }`}
                          >
                            {pm.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Review Your Booking</h2>
                  <div className="bg-card rounded-xl border border-border p-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                      <div className="text-muted-foreground">Service</div>
                      <div className="font-medium text-foreground">{selectedService?.label}</div>
                      <div className="text-muted-foreground">Property</div>
                      <div className="font-medium text-foreground">{form.propertyType} - {form.size}</div>
                      <div className="text-muted-foreground">Add-ons</div>
                      <div className="font-medium text-foreground">{selectedAddons.length > 0 ? selectedAddons.map((a) => a.label).join(", ") : "None"}</div>
                      <div className="text-muted-foreground">Date & Time</div>
                      <div className="font-medium text-foreground">{form.date} at {form.time}</div>
                      <div className="text-muted-foreground">Name</div>
                      <div className="font-medium text-foreground">{form.name}</div>
                      <div className="text-muted-foreground">Contact</div>
                      <div className="font-medium text-foreground">{form.email} | {form.phone}</div>
                      <div className="text-muted-foreground">Payment</div>
                      <div className="font-medium text-foreground">{form.payment === "mpesa" ? "M-Pesa" : "Card"}</div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-base font-medium text-foreground">Total Estimated Price</span>
                      <span className="text-2xl font-bold text-primary">KES {totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <Button
              variant="outline"
              onClick={() => setCurrentStep((s) => s - 1)}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back
            </Button>

            {currentStep < steps.length - 1 ? (
              <Button onClick={() => setCurrentStep((s) => s + 1)} disabled={!canProceed()}>
                Next
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            ) : (
              <Button onClick={() => setSubmitted(true)}>
                Confirm Booking
                <CheckCircle2 className="ml-2 w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
