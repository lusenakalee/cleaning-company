"use client";

import { teamMembers } from "@/lib/mock-data";
import { Award, Eye, Heart, Lightbulb, ShieldCheck, Star, Target, Users } from "lucide-react";
import { motion } from "motion/react";

const coreValues = [
  { letter: "C", title: "Committed", desc: "We are accessible and deliver outstanding services.", icon: Heart },
  { letter: "L", title: "Loyal", desc: "We are devoted to our clients.", icon: Users },
  { letter: "O", title: "Organized", desc: "We stay focused and use our time effectively.", icon: Lightbulb },
  { letter: "V", title: "Versatile", desc: "We adapt to many different functions.", icon: Award },
  { letter: "E", title: "Efficient", desc: "We achieve more with less.", icon: Star },
  { letter: "R", title: "Reliable", desc: "We do what we say.", icon: ShieldCheck },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              About Cleaning Co. Limited
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A first-rate Cleaning Co. with experience in commercial and residential cleaning services in Kenya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">Our Story</h2>
              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  Cleaning Co. Limited is a first-rate Cleaning Co. with experience in commercial cleaning services in Kenya. Our approach is based on tested processes, methods and a skilled team to ensure customer satisfaction.
                </p>
                <p>
                  We provide a full range of professional cleaning and fumigation services. We offer customized cleaning solutions at competitive prices designed to enhance your organization&apos;s corporate image.
                </p>
                <p>
                  We are committed to customer satisfaction and therefore provide only highly trained staff who are led by a dedicated and competent management team. With our company, your satisfaction is guaranteed.
                </p>
                <p>
                  We understand the importance of professionally cleaned spaces and therefore survey your premises and work out the most efficient way to clean it. We guarantee zero interruptions with your daily activities so you can concentrate on your core business.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary/5 rounded-2xl p-8 lg:p-12"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">Quality Assurance</h3>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Understanding the client premise
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Proactive and responsive account management
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Full time dedicated supervisor at the premise
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Customized cleaning programs for each client
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Monthly performance appraisal
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Building strong partnerships with clients
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-xl border border-border bg-background"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To ensure that our customer gets the best service available in the Cleaning Industry in order to provide Premium and Luxury service and ultimately exceed customer expectation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-xl border border-border bg-background"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To meet the growing demand of the cleaning industry with the latest art of technology in order to exceed our customer requirement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Our Core Values — CLOVER
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.letter}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-primary-foreground">{value.letter}</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Meet the Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-background"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
