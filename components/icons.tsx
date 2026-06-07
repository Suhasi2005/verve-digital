import {
  Search,
  Share2,
  Target,
  Palette,
  Monitor,
  BarChart3,
  Compass,
  Clapperboard,
  TrendingUp,
  Lightbulb,
  Handshake,
  Eye,
  type LucideIcon,
} from "lucide-react";

// Service slug → line icon (replaces emoji)
export const serviceIcon: Record<string, LucideIcon> = {
  seo: Search,
  "social-media": Share2,
  "paid-ads": Target,
  branding: Palette,
  "web-design": Monitor,
  analytics: BarChart3,
};

// Business-pipeline stage → line icon
export const planIcon: Record<string, LucideIcon> = {
  Strategy: Compass,
  Branding: Palette,
  Content: Clapperboard,
  Growth: TrendingUp,
  Analytics: BarChart3,
};

// About-page values (in order)
export const valueIcon: LucideIcon[] = [Target, Eye, Lightbulb, Handshake];
