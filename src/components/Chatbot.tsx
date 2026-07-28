import { useState, useRef, useEffect, useCallback } from 'react';

interface Message {
  text: string;
  type: 'bot' | 'user';
  id: number;
}

interface QuickButton {
  label: string;
  action: () => void;
}

const services = [
  { name: 'Website Development', price: 'From \u00a3299', desc: 'Custom responsive websites' },
  { name: 'Mobile App', price: 'From \u00a3499', desc: 'iOS & Android apps' },
  { name: 'AI Chatbot', price: 'From \u00a3199', desc: 'Smart chatbot solutions' },
  { name: 'Voice Agent AI', price: 'From \u00a3249', desc: 'Voice-powered assistants' },
  { name: 'CRM System', price: 'From \u00a3599', desc: 'Customer relationship management' },
  { name: 'ERP Solution', price: 'From \u00a3999', desc: 'Enterprise resource planning' },
  { name: 'Process Automation', price: 'From \u00a3399', desc: 'Workflow automation' },
  { name: 'AI Consulting', price: 'From \u00a3499', desc: 'Strategic AI guidance' },
];

const quickReplies: Record<string, string> = {
  'View Services': 'Here are our services. Which one interests you?',
  'Pricing': 'Our pricing starts from \u00a3299 for websites. Would you like details on a specific service?',
  'Book Consultation': 'I\'d be happy to help you book a free consultation! What service are you interested in?',
  'Contact': 'You can reach us at hello@genfeel.co.uk. Or book a consultation right here!',
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [quickButtons, setQuickButtons] = useState<QuickButton[]>([]);
  const [showServices, setShowServices] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);

  const addMessage = useCallback((text: string, type: 'bot' | 'user') => {
    setMessages((prev) => [...prev, { text, type, id: nextId.current++ }]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, quickButtons, showServices]);

  const getWelcomeMessage = useCallback(() => {
    addMessage("Hi there! I'm Genfeel's AI assistant. How can I help you today?", 'bot');
    setQuickButtons([
      { label: 'View Services', action: () => handleQuickReply('View Services') },
      { label: 'Pricing', action: () => handleQuickReply('Pricing') },
      { label: 'Book Consultation', action: () => handleQuickReply('Book Consultation') },
      { label: 'Contact', action: () => handleQuickReply('Contact') },
    ]);
  }, [addMessage]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(getWelcomeMessage, 400);
    }
  }, [isOpen, messages.length, getWelcomeMessage]);

  const handleQuickReply = (label: string) => {
    addMessage(label, 'user');
    setQuickButtons([]);
    setShowServices(false);

    setTimeout(() => {
      if (label === 'View Services') {
        addMessage(quickReplies[label], 'bot');
        setShowServices(true);
      } else if (label === 'Pricing') {
        addMessage(quickReplies[label], 'bot');
        setQuickButtons([
          { label: 'Website Pricing', action: () => handleQuickReply('Website Pricing') },
          { label: 'App Pricing', action: () => handleQuickReply('App Pricing') },
          { label: 'AI Pricing', action: () => handleQuickReply('AI Pricing') },
          { label: 'Book Consultation', action: () => handleQuickReply('Book Consultation') },
        ]);
      } else if (label === 'Book Consultation') {
        addMessage('Great! Let me help you book a free consultation. First, which service are you interested in?', 'bot');
        setShowServices(true);
      } else if (label === 'Contact') {
        addMessage(quickReplies[label], 'bot');
        setQuickButtons([
          { label: 'Book Consultation', action: () => handleQuickReply('Book Consultation') },
          { label: 'View Services', action: () => handleQuickReply('View Services') },
        ]);
      } else if (label === 'Website Pricing') {
        addMessage('\u00a3299 Starter | \u00a3749 Professional | \u00a31,499 Business. All include responsive design, SEO, and hosting. Which fits your needs?', 'bot');
        setQuickButtons([
          { label: 'Starter Details', action: () => handleQuickReply('Starter Details') },
          { label: 'Professional Details', action: () => handleQuickReply('Professional Details') },
          { label: 'Business Details', action: () => handleQuickReply('Business Details') },
        ]);
      } else if (label === 'App Pricing') {
        addMessage('Mobile apps start from \u00a3499 for cross-platform development. Native apps from \u00a3799. Includes push notifications and app store submission.', 'bot');
        setQuickButtons([
          { label: 'Book Consultation', action: () => handleQuickReply('Book Consultation') },
        ]);
      } else if (label === 'AI Pricing') {
        addMessage('AI Chatbots from \u00a3199 | Voice Agents from \u00a3249 | AI Consulting from \u00a3499. All include custom training and analytics.', 'bot');
        setQuickButtons([
          { label: 'Book Consultation', action: () => handleQuickReply('Book Consultation') },
        ]);
      } else if (label === 'Starter Details') {
        addMessage('Starter (\u00a3299): 1-3 pages, responsive design, basic SEO, contact form, 1 revision. Perfect for small businesses!', 'bot');
        setQuickButtons([
          { label: 'Book Consultation', action: () => handleQuickReply('Book Consultation') },
        ]);
      } else if (label === 'Professional Details') {
        addMessage('Professional (\u00a3749): 5-8 pages, CMS, advanced SEO, blog, analytics, 3 revisions. Our most popular choice!', 'bot');
        setQuickButtons([
          { label: 'Book Consultation', action: () => handleQuickReply('Book Consultation') },
        ]);
      } else if (label === 'Business Details') {
        addMessage('Business (\u00a31,499): Unlimited pages, custom features, e-commerce, priority support, 6 revisions, 3 months maintenance.', 'bot');
        setQuickButtons([
          { label: 'Book Consultation', action: () => handleQuickReply('Book Consultation') },
        ]);
      } else {
        const selectedService = services.find(s => s.name === label);
        if (selectedService) {
          addMessage(`Excellent choice! ${selectedService.name} (${selectedService.price}). To book a consultation, please email us at hello@genfeel.co.uk. Would you like to know anything else?`, 'bot');
          setQuickButtons([
            { label: 'View Services', action: () => handleQuickReply('View Services') },
            { label: 'Pricing', action: () => handleQuickReply('Pricing') },
            { label: 'Contact', action: () => handleQuickReply('Contact') },
          ]);
        } else {
          addMessage('Thanks for your message! I can help with services, pricing, booking a consultation, or contact information. What would you like to know?', 'bot');
          setQuickButtons([
            { label: 'View Services', action: () => handleQuickReply('View Services') },
            { label: 'Pricing', action: () => handleQuickReply('Pricing') },
            { label: 'Book Consultation', action: () => handleQuickReply('Book Consultation') },
            { label: 'Contact', action: () => handleQuickReply('Contact') },
          ]);
        }
      }
    }, 500);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const text = input.trim();
    addMessage(text, 'user');
    setInput('');
    setShowServices(false);

    setTimeout(() => {
      const lower = text.toLowerCase();
      if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) {
        addMessage('Hello! Welcome to Genfeel. How can I assist you today?', 'bot');
        setQuickButtons([
          { label: 'View Services', action: () => handleQuickReply('View Services') },
          { label: 'Pricing', action: () => handleQuickReply('Pricing') },
          { label: 'Book Consultation', action: () => handleQuickReply('Book Consultation') },
        ]);
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('how much')) {
        handleQuickReply('Pricing');
      } else if (lower.includes('service')) {
        handleQuickReply('View Services');
      } else if (lower.includes('book') || lower.includes('consult') || lower.includes('appointment')) {
        handleQuickReply('Book Consultation');
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone')) {
        handleQuickReply('Contact');
      } else if (lower.includes('website')) {
        addMessage('We offer three website packages: Starter (\u00a3299), Professional (\u00a3749), and Business (\u00a31,499). Which would you like to know more about?', 'bot');
        setQuickButtons([
          { label: 'Starter Details', action: () => handleQuickReply('Starter Details') },
          { label: 'Professional Details', action: () => handleQuickReply('Professional Details') },
          { label: 'Business Details', action: () => handleQuickReply('Business Details') },
        ]);
      } else if (lower.includes('thank') || lower.includes('bye')) {
        addMessage('You\'re welcome! Feel free to reach out anytime. Have a great day!', 'bot');
      } else {
        addMessage('I can help with our services, pricing, booking a consultation, or contact information. What would you like to know?', 'bot');
        setQuickButtons([
          { label: 'View Services', action: () => handleQuickReply('View Services') },
          { label: 'Pricing', action: () => handleQuickReply('Pricing') },
          { label: 'Contact', action: () => handleQuickReply('Contact') },
        ]);
      }
    }, 600);
  };

  return (
    <>
      {/* Chat Bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105 ${
          isOpen
            ? 'bg-matte-card border border-white/10'
            : 'text-white'
        }`}
        style={isOpen ? {} : { background: 'linear-gradient(135deg, #6366f1, #ec4899)', boxShadow: '0 4px 24px rgba(99, 102, 241, 0.4)' }}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] rounded-card shadow-elevated overflow-hidden flex flex-col border border-white/[0.08]" style={{ maxHeight: '500px', background: '#111111' }}>
          {/* Header */}
          <div className="px-5 py-4 flex items-center justify-between text-white" style={{ background: 'linear-gradient(135deg, #6366f1, #ec4899)' }}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-white">Genfeel Assistant</p>
                <p className="font-body text-xs text-white/80">AI Powered</p>
              </div>
            </div>
            <button
              onClick={() => { setMessages([]); setQuickButtons([]); setShowServices(false); setTimeout(getWelcomeMessage, 200); }}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              title="New chat"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[280px] max-h-[340px]" style={{ background: '#0a0a0a' }}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl font-body text-sm leading-relaxed ${
                  msg.type === 'user'
                    ? 'bg-[#6366f1] text-white rounded-br-sm'
                    : 'bg-matte-card text-white border border-white/[0.06] rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Service Cards */}
            {showServices && (
              <div className="grid grid-cols-1 gap-2 mt-2">
                {services.map((service) => (
                  <button key={service.name} onClick={() => handleQuickReply(service.name)} className="text-left p-3 bg-matte-card rounded-xl border border-white/[0.06] hover:border-[#6366f1] hover:bg-[#6366f1]/[0.06] transition-all duration-200">
                    <p className="font-body text-sm font-medium text-white">{service.name}</p>
                    <p className="font-body text-xs text-white/70 mt-0.5">{service.desc}</p>
                    <p className="font-body text-xs text-[#818cf8] mt-1">{service.price}</p>
                  </button>
                ))}
              </div>
            )}

            {/* Quick Buttons */}
            {quickButtons.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {quickButtons.map((btn) => (
                  <button key={btn.label} onClick={btn.action} className="px-4 py-2 bg-matte-card border border-[#6366f1]/30 rounded-pill font-body text-xs font-medium text-[#818cf8] hover:bg-[#6366f1] hover:text-white transition-all duration-200">
                    {btn.label}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/[0.08] flex gap-2" style={{ background: '#111111' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2.5 bg-matte-light rounded-button font-body text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 border border-white/10"
            />
            <button
              onClick={handleSend}
              className="w-10 h-10 rounded-button text-white flex items-center justify-center transition-colors"
              style={{ background: 'linear-gradient(135deg, #6366f1, #ec4899)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
