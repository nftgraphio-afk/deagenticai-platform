import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export function Rates() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <h1 className="text-4xl md:text-6xl font-serif font-medium text-white mb-4">Rates</h1>
      <p className="text-lg text-white/70 mb-12 max-w-2xl">
        Transparent pricing for teams of all sizes. Choose the plan that fits your needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Starter */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col">
          <h3 className="text-xl font-medium text-white mb-2">Starter</h3>
          <div className="text-3xl font-bold text-white mb-6">$0 <span className="text-sm font-normal text-white/50">/ month</span></div>
          <p className="text-white/60 mb-8 flex-1">Perfect for hobbyists and personal projects.</p>
          <ul className="space-y-4 mb-8">
            {['1 Project', 'Community Support', 'Basic Analytics', '1GB Storage'].map((feature) => (
              <li key={feature} className="flex items-center text-sm text-white/80">
                <Check className="w-4 h-4 mr-3 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
          <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 hover:text-white text-white">Get Started</Button>
        </div>

        {/* Pro */}
        <div className="relative rounded-3xl border border-primary/50 bg-white/10 backdrop-blur-md p-8 flex flex-col shadow-[0_0_40px_-10px_rgba(56,189,248,0.3)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
          <h3 className="text-xl font-medium text-white mb-2">Pro</h3>
          <div className="text-3xl font-bold text-white mb-6">$29 <span className="text-sm font-normal text-white/50">/ month</span></div>
          <p className="text-white/60 mb-8 flex-1">For growing teams and professional workflows.</p>
          <ul className="space-y-4 mb-8">
            {['Unlimited Projects', 'Priority Support', 'Advanced Analytics', '100GB Storage', 'Custom Domain'].map((feature) => (
              <li key={feature} className="flex items-center text-sm text-white">
                <Check className="w-4 h-4 mr-3 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
          <Button className="w-full bg-primary text-black hover:bg-primary/90">Get Pro</Button>
        </div>

        {/* Enterprise */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col">
          <h3 className="text-xl font-medium text-white mb-2">Enterprise</h3>
          <div className="text-3xl font-bold text-white mb-6">Custom</div>
          <p className="text-white/60 mb-8 flex-1">Tailored solutions for large organizations.</p>
          <ul className="space-y-4 mb-8">
            {['Dedicated Support', 'SLA', 'Custom Integrations', 'Unlimited Storage', 'SSO & Audit Logs'].map((feature) => (
              <li key={feature} className="flex items-center text-sm text-white/80">
                <Check className="w-4 h-4 mr-3 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
          <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 hover:text-white text-white">Contact Sales</Button>
        </div>
      </div>
    </div>
  );
}
