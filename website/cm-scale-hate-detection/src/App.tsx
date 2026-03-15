import { useState, useEffect } from 'react';
import { Shield, Download, BarChart3, BookOpen, Database, FileCheck2, Settings2, BrainCircuit, Target, CheckCircle2, XCircle, Mail, GraduationCap, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

function App() {
  const [showDemo, setShowDemo] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const performanceData = [
    { name: "Tier 1", F1: 72, Accuracy: 74 },
    { name: "Tier 2", F1: 85, Accuracy: 87 },
    { name: "Tier 3 (CM-SCALE)", F1: 94.2, Accuracy: 95.1 }
  ];

  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  ></motion.section>

  function AboutTabs() {
    const [active, setActive] = useState("motivation")

    return (
      <div className="mb-12 md:mb-20">
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <button
            onClick={() => setActive("motivation")}
            className={`px-8 py-4 rounded-full font-medium transition text-base
              ${active === "motivation" ? "bg-teal-700 text-white" : "bg-white border border-teal-200 text-teal-700 hover:bg-teal-50"}`}
          >
            Motivation
          </button>

          <button
            onClick={() => setActive("problem")}
            className={`px-8 py-4 rounded-full font-medium transition text-base
              ${active === "problem" ? "bg-teal-700 text-white" : "bg-white border border-teal-200 text-teal-700 hover:bg-teal-50"}`}
          >
            Problem Statement
          </button>
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-lg max-w-4xl mx-auto text-gray-700 leading-relaxed text-base md:text-lg"
        >
          {active === "motivation" ? (
            <>Hate speech in Sri Lanka has intensified through code-mixed Sinhala–Tamil–English content. Events such as the 2018 riots, 2019 Easter attacks, and 2022 unrest demonstrate how rapidly toxic narratives spread online. Existing moderation systems fail to capture local linguistic nuance.</>
          ) : (
            <>
              Current detectors are English-centric and struggle with:
              <ul className="mt-6 space-y-3 list-disc pl-5">
                <li>Sinhala–Tamil–English code-mixing</li>
                <li>Slang, sarcasm, emojis & Romanized text</li>
                <li>Low-resource language constraints</li>
              </ul>
              <p className="mt-6 font-medium text-teal-700">Result: High false negatives and unsafe digital environments.</p>
            </>
          )}
        </motion.div>
      </div>
    )
  }

  function ObjectivesSection() {
    return (
      <div className="mb-16 md:mb-24">
        <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
          <Target className="w-8 h-8 text-teal-700" />
          <h3 className="text-3xl md:text-4xl font-semibold text-teal-900">Objectives</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-8 md:p-10 rounded-2xl shadow-md border-l-4 border-teal-600">
            <h4 className="text-lg md:text-xl font-semibold text-teal-700 mb-4">Main Objective</h4>
            Develop a robust web-based hate speech detection system for Sinhala–Tamil–English code-mixed text using advanced ML & NLP.
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-8 md:p-10 rounded-2xl shadow-md">
            <h4 className="text-lg md:text-xl font-semibold text-teal-700 mb-4">Specific Goals</h4>
            <ul className="space-y-3 text-gray-700 text-base">
              <li>• Build unified 47K+ dataset</li>
              <li>• Compare Tier-1, Tier-2 & Tier-3 models</li>
              <li>• Propose CM-SCALE framework</li>
              <li>• Deploy real-time web system</li>
            </ul>
          </motion.div>
        </div>
      </div>
    )
  }

  function ScopeSection() {
    return (
      <div className="mb-12">
        <h3 className="text-3xl md:text-4xl font-semibold text-center text-teal-900 mb-10">Project Scope</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-8 md:p-10 rounded-2xl shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="text-green-600 w-6 h-6" />
              <h4 className="text-xl font-semibold text-green-700">In Scope</h4>
            </div>
            <ul className="space-y-3 text-gray-700 text-base">
              <li>• Sinhala–Tamil–English code-mixed text</li>
              <li>• Binary classification</li>
              <li>• Three-tier modeling (CM-SCALE focus)</li>
              <li>• Real-time web-based deployment</li>
            </ul>
          </div>

          <div className="bg-red-50 p-8 md:p-10 rounded-2xl shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="text-red-600 w-6 h-6" />
              <h4 className="text-xl font-semibold text-red-700">Out of Scope</h4>
            </div>
            <ul className="space-y-3 text-gray-700 text-base">
              <li>• Image/audio hate detection</li>
              <li>• Full production moderation infrastructure</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  function MethodologyTabs() {
    const [active, setActive] = useState(0)

    const steps = [
      { title: "Datasets", icon: <Database className="w-5 h-5" />, content: <>Aggregated 47,000+ real-world Sinhala–Tamil–English code-mixed comments from Facebook, Instagram, and YouTube, ensuring diversity and representativeness.</> },
      { title: "Annotation", icon: <FileCheck2 className="w-5 h-5" />, content: <>Expert annotators labeled data for hate speech, non-hate, and ambiguous cases, with inter-annotator agreement checks for quality.</> },
      { title: "Preprocessing", icon: <Settings2 className="w-5 h-5" />, content: <>Text normalization, emoji/slang handling, code-mix detection, and Romanization conversion to prepare data for modeling.</> },
      { title: "Modeling Framework", icon: <BrainCircuit className="w-5 h-5" />, content: <>Compared traditional ML, deep learning, and transformer models; proposed CM-SCALE (fine-tuned XLM-R) for best performance.</> }
    ]

    return (
      <div>
        {/* Buttons - Stack on mobile */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 rounded-full text-sm md:text-base font-medium transition 
                ${active === index
                  ? "bg-teal-700 text-white shadow-lg"
                  : "bg-white text-teal-700 border border-teal-200 hover:bg-teal-50"}`}
            >
              {step.icon}
              {step.title}
            </button>
          ))}
        </div>

        {/* Content - Better padding on mobile */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-md text-gray-700 text-base md:text-lg"
        >
          {steps[active].content}
        </motion.div>
      </div>
    )
  }




  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 text-gray-900">
      {/* ==================== MOBILE RESPONSIVE NAVBAR ==================== */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center">
              <img src="/images/logo.png" alt="CM-SCALE Logo" className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-bold text-teal-700 tracking-tight">CM-SCALE</h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 text-base font-medium text-gray-700">
            <a href="#home" className={`hover:text-teal-600 transition pb-1 ${activeSection === 'home' ? 'text-teal-600 font-semibold border-b-2 border-teal-600' : ''}`}>Home</a>
            <a href="#about" className={`hover:text-teal-600 transition pb-1 ${activeSection === 'about' ? 'text-teal-600 font-semibold border-b-2 border-teal-600' : ''}`}>About</a>
            <a href="#research" className={`hover:text-teal-600 transition pb-1 ${activeSection === 'research' ? 'text-teal-600 font-semibold border-b-2 border-teal-600' : ''}`}>Research</a>
            <a href="#methodology" className={`hover:text-teal-600 transition pb-1 ${activeSection === 'methodology' ? 'text-teal-600 font-semibold border-b-2 border-teal-600' : ''}`}>Methodology</a>
            <a href="#results" className={`hover:text-teal-600 transition pb-1 ${activeSection === 'results' ? 'text-teal-600 font-semibold border-b-2 border-teal-600' : ''}`}>Results</a>
          </div>

          {/* Download Button (Desktop) */}
          <a href="/docs/Thesis.pdf" download="CM-SCALE_Thesis.pdf"
            className="hidden md:flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-7 py-3.5 rounded-2xl text-sm font-semibold transition">
            <Download className="w-4 h-4" />
            Download Thesis
          </a>

          {/* Hamburger Button (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-teal-700"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t py-6 px-6">
            <div className="flex flex-col gap-6 text-lg font-medium text-gray-700">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#research" onClick={() => setIsMobileMenuOpen(false)}>Research</a>
              <a href="#methodology" onClick={() => setIsMobileMenuOpen(false)}>Methodology</a>
              <a href="#results" onClick={() => setIsMobileMenuOpen(false)}>Results</a>
              <a href="/docs/Thesis.pdf" download="CM-SCALE_Thesis.pdf" className="text-teal-700 font-semibold">Download Thesis</a>
            </div>
          </div>
        )}
      </nav>

      {/* ====================== HERO SECTION (Mobile Optimized) ====================== */}
      <section id="home" className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-8">
          AI FOR SAFER SOCIAL MEDIA IN SRI LANKA
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-teal-900 leading-none mb-6">
          Code-Mixed Hate Speech<br />
          Detection in Sinhala & Tamil
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 px-4">
          CM-SCALE Framework — Fine-tuned XLM-R model for real-world Sinhala-Tamil-English code-mixed comments
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center px-6">
          <a
            href="#results"
            className="border-2 border-teal-700 text-teal-700 hover:bg-teal-600 hover:text-white font-semibold text-lg md:text-xl px-12 py-4 rounded-2xl transition-all"
          >
            View Results
          </a>
        </div>
      </section>

      {/* ==================== ABOUT SECTION (Mobile Responsive) ==================== */}
      <section id="about" className="bg-gradient-to-b from-white to-teal-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">

          {/* Heading */}
          <div className="flex items-center justify-center gap-3 mb-12 md:mb-16">
            <Shield className="w-9 h-9 md:w-10 md:h-10 text-teal-700" />
            <h2 className="text-4xl md:text-5xl font-bold text-teal-900">About the Project</h2>
          </div>

          <AboutTabs />

          <ObjectivesSection />

          <ScopeSection />

        </div>
      </section>

      {/* ==================== RESEARCH JOURNEY ==================== */}
      <section id="research" className="py-16 md:py-24 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">

          {/* Heading with Icon */}
          <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
            <BookOpen className="w-9 h-9 md:w-10 md:h-10 text-teal-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-teal-900">Research Journey</h2>
          </div>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg px-4">
            We reviewed 24 papers (2019–2025) and grouped them into 5 categories to identify gaps in Sinhala-Tamil code-mixed hate speech detection.
          </p>

          {/* Group Cards - Stack on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {[
              { g: "G1", title: "Traditional ML", desc: "SVM, Logistic Regression, TF-IDF (66–71% accuracy)" },
              { g: "G2", title: "Deep Learning", desc: "CNN, LSTM, BiGRU (F1 up to 0.93)" },
              { g: "G3", title: "Transformers", desc: "XLM-R, MuRIL, mBERT (macro-F1 0.73–0.94)" },
              { g: "G4", title: "Ensemble", desc: "Hybrid models (up to 76% accuracy)" },
              { g: "G5", title: "Hybrid / Federated", desc: "MultiFED, LoRA, contrastive learning" }
            ].map((group) => (
              <div
                key={group.g}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-teal-100"
              >
                <div className="text-4xl font-bold text-teal-600 mb-3">{group.g}</div>
                <h4 className="text-2xl font-semibold text-teal-800 mb-3">{group.title}</h4>
                <p className="text-gray-700 text-base">{group.desc}</p>
              </div>
            ))}
          </div>

          {/* Research Gap */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-teal-900 mb-8 text-center">Identified Research Gaps</h3>
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border-l-4 border-teal-600">
              <ul className="space-y-4 text-gray-700 text-base">
                <li>• Most datasets are small, imbalanced, and platform-specific</li>
                <li>• Very few studies handle full Sinhala-Tamil-English code-mixing</li>
                <li>• Lack of joint Sinhala-Tamil models</li>
                <li>• Limited exploration of sarcasm, slang, emojis</li>
                <li>• No real-time deployable system with ethical considerations</li>
              </ul>
            </div>
          </div>

          {/* Insights */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-teal-900 mb-8 text-center">Key Research Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-teal-50 p-8 rounded-2xl shadow-md">Transformer-based models perform significantly better on code-mixed data.</div>
              <div className="bg-teal-50 p-8 rounded-2xl shadow-md">Low-resource techniques like LoRA and contrastive learning are highly effective.</div>
            </div>
          </div>

          {/* Comparison Table - Mobile Friendly */}
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-md border border-teal-100 overflow-x-auto">
            <h3 className="text-2xl font-semibold text-teal-900 mb-8 text-center">What Our Study Adds (Comparison)</h3>
            <table className="w-full border-collapse text-sm min-w-[600px]">
              {/* Table content remains same as before */}
              <thead>
                <tr className="bg-teal-800 text-white">
                  <th className="p-4 text-left">Factors</th>
                  <th className="p-4">G1</th><th className="p-4">G2</th><th className="p-4">G3</th>
                  <th className="p-4">G4</th><th className="p-4">G5</th><th className="p-4 bg-teal-600 font-bold">Our Study</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  ["Hate Speech Detection", "✓", "✓", "✓", "✓", "✓", "✓"],
                  ["Code-Mixed Handling", "✗", "✓", "✓", "✓", "✓", "✓"],
                  ["Sarcasm / Implicit", "✓", "✓", "✓", "✓", "✗", "✓"],
                  ["Emoji / Slang", "✓", "✗", "✗", "✓", "✗", "✓"],
                  ["Explainability (LIME)", "✗", "✗", "✓", "✗", "✗", "✓"],
                  ["Class Imbalance", "✗", "✓", "✓", "✗", "✗", "✓"],
                  ["Real-Time Deployment", "✓", "✗", "✗", "✗", "✓", "✓"]
                ].map((row, i) => (
                  <tr key={i} className="border-t hover:bg-teal-50">
                    <td className="p-4 font-medium">{row[0]}</td>
                    {row.slice(1).map((cell, j) => (
                      <td key={j} className="p-4 text-center text-xl">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ==================== METHODOLOGY ==================== */}
      <section id="methodology" className="py-16 md:py-24 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-5xl mx-auto px-6 md:px-8">

          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BrainCircuit className="w-9 h-9 md:w-10 md:h-10 text-teal-700" />
              <h2 className="text-4xl md:text-5xl font-bold text-teal-900">Methodology</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
              A structured, experimental pipeline for Sinhala–Tamil–English code-mixed hate speech detection.
            </p>
          </div>

          {/* Step Navigation - Better on Mobile */}
          <MethodologyTabs />

        </div>
      </section>

      {/* ==================== RESULTS SECTION (Mobile Responsive) ==================== */}
      <section id="results" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">

          {/* Heading */}
          <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
            <BarChart3 className="w-9 h-9 md:w-10 md:h-10 text-teal-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-teal-900">Results & Impact</h2>
          </div>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg px-4">
            CM-SCALE (Tier-3) significantly outperforms baselines — achieving state-of-the-art performance on Sri Lankan code-mixed text.
          </p>

          {/* Performance Chart - Smaller on mobile */}
          <div className="bg-white border border-teal-100 rounded-3xl p-6 md:p-10 mb-12 shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold text-teal-900 mb-8 text-center">Model Performance Comparison</h3>
            <div className="h-72 md:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="F1" fill="#14b8a6" name="Macro F1-Score" radius={8} />
                  <Bar dataKey="Accuracy" fill="#0f766e" name="Accuracy" radius={8} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Key Metrics Cards - Stack on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-teal-50 p-8 md:p-10 rounded-3xl text-center shadow-sm">
              <div className="text-5xl md:text-6xl font-bold text-teal-700 mb-3">94.2%</div>
              <div className="text-lg font-semibold">Macro F1-Score</div>
              <div className="text-gray-600 mt-1">(Tier-3 CM-SCALE)</div>
            </div>

            <div className="bg-teal-50 p-8 md:p-10 rounded-3xl text-center shadow-sm">
              <div className="text-5xl md:text-6xl font-bold text-teal-700 mb-3">95.1%</div>
              <div className="text-lg font-semibold">Accuracy</div>
              <div className="text-gray-600 mt-1">on 47k real-world comments</div>
            </div>

            <div className="bg-teal-50 p-8 md:p-10 rounded-3xl text-center shadow-sm">
              <div className="text-5xl md:text-6xl font-bold text-teal-700 mb-3">+22%</div>
              <div className="text-lg font-semibold">Improvement</div>
              <div className="text-gray-600 mt-1">over traditional baselines</div>
            </div>
          </div>

          <div className="mt-16 text-center text-gray-600 px-4">
            <p className="text-base md:text-lg">The CM-SCALE framework is now ready for real-time deployment on Facebook, Instagram & X.</p>
            <p className="mt-4 font-medium text-teal-700">To the best of our knowledge, this is Sri Lanka’s first dedicated code-mixed hate speech detection system.</p>
          </div>
        </div>
      </section>



      {/* Team Section */}
      <div id="team" className="py-24 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-teal-900 text-center mb-20">
            Our Team & Supervisor
          </h2>

          {/* ================= SUPERVISOR ================= */}
          <div className="max-w-3xl mx-auto mb-20">
            {[
              { name: "Mrs. Sankani Heenkenda", field: "Academic Supervisor", index: "Lecturer", email: "sankaniheenkenda@sjp.ac.lk", image: "/images/sankani.png" }
            ].map(member => (
              <div
                key={member.index}
                className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-teal-600 text-center"
              >

                <div className="w-44 h-44 border-4 border-teal-200 rounded-full shadow-lg mx-auto mb-6 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-3xl font-semibold text-teal-900 mb-2">
                  {member.name}
                </h4>

                <p className="text-lg text-teal-700 font-medium mb-1">
                  {member.field}
                </p>

                <p className="text-gray-500 mb-3">
                  {member.index}
                </p>

                <p className="text-gray-700 flex justify-center items-center gap-2">
                  <Mail className="w-4 h-4" /> {member.email}
                </p>

              </div>
            ))}
          </div>

          {/* ================= TEAM MEMBERS ================= */}
          <div className="grid md:grid-cols-3 gap-10 ">
            {[
              { name: "M.S.K.P. Subasinghe", field: "Network Technology", index: "ICT/21/928", email: "ict21928@fot.sjp.ac.lk", image: "/images/kavindu.jpeg" },
              { name: "A.F. Asra", field: "Software Technology", index: "ICT/21/808", email: "ict21808@fot.sjp.ac.lk", image: "/images/ashra.jpeg" },
              { name: "M.S.F. Simaha", field: "Software Technology", index: "ICT/21/925", email: "ict21925@fot.sjp.ac.lk", image: "/images/simaha.jpeg" }
            ].map(member => (
              <div
                key={member.index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center"
              >

                <div className="w-40 h-40 border-4 border-teal-100 rounded-full shadow-md mx-auto mb-6 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-2xl font-semibold text-teal-900 mb-2">
                  {member.name}
                </h4>

                <p className="text-teal-700 font-medium mb-1">
                  {member.field}
                </p>

                <p className="text-gray-500 text-sm mb-3 flex justify-center items-center gap-2">
                  <GraduationCap className="w-4 h-4" /> {member.index}
                </p>

                <p className="text-gray-600 text-sm flex justify-center items-center gap-2">
                  <Mail className="w-4 h-4" /> {member.email}
                </p>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t mt-20">
        <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Left - Logo + Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center"><img src="/images/logo.png" alt="CM-SCALE Logo" className="w-10 h-10" /></div>
              <h1 className="text-2xl font-bold text-teal-700">CM-SCALE</h1>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Code-Mixed Hate Speech Detection in Sinhala and Tamil<br />
              Using Machine Learning and NLP Techniques
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Navigation</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#home" className="hover:text-teal-600">Home</a></li>
              <li><a href="#about" className="hover:text-teal-600">About</a></li>
              <li><a href="#research" className="hover:text-teal-600">Research</a></li>
              <li><a href="#methodology" className="hover:text-teal-600">Methodology</a></li>
              <li><a href="#results" className="hover:text-teal-600">Results</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Resources</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a
                  href="/docs/Thesis.pdf"
                  download="CM-SCALE_Thesis.pdf"
                  className="hover:text-teal-600 flex items-center gap-2">
                  Download Thesis
                </a>
              </li>
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Organization</h4>
            <p className="text-gray-600">University of Sri Jayewardenepura</p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t py-8 text-center text-sm text-gray-500">
          Department of Information Communication Technology<br />
          Faculty of Technology • University of Sri Jayewardenepura<br />
          © 2026 CM-SCALE — Research Group 03
        </div>
      </footer>
    </div>
  );
}

export default App;