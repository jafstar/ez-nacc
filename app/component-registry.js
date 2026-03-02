import dynamic from "next/dynamic";

// Registry of all available components mapped by their comp_type or comp_path
// Each entry uses an explicit dynamic import so webpack can statically analyze them
const registry = {
  // Hero components
  "/HeroV2": dynamic(() => import("../components/HeroV2"), { ssr: false }),
  "HeroV2": dynamic(() => import("../components/HeroV2"), { ssr: false }),
  "/HeroV1": dynamic(() => import("../components/HeroV1"), { ssr: false }),
  "HeroV1": dynamic(() => import("../components/HeroV1"), { ssr: false }),
  "/HeroV3": dynamic(() => import("../components/HeroV3"), { ssr: false }),
  "HeroV3": dynamic(() => import("../components/HeroV3"), { ssr: false }),
  "/Hero": dynamic(() => import("../components/Hero"), { ssr: false }),
  "Hero": dynamic(() => import("../components/Hero"), { ssr: false }),
  "/HeroFade": dynamic(() => import("../components/HeroFade"), { ssr: false }),
  "HeroFade": dynamic(() => import("../components/HeroFade"), { ssr: false }),
  "/HeroBoxes": dynamic(() => import("../components/HeroBoxes"), { ssr: false }),
  "HeroBoxes": dynamic(() => import("../components/HeroBoxes"), { ssr: false }),
  "/HeroMessage": dynamic(() => import("../components/HeroMessage"), { ssr: false }),
  "HeroMessage": dynamic(() => import("../components/HeroMessage"), { ssr: false }),
  "/EZHero": dynamic(() => import("../components/EZHero"), { ssr: false }),
  "EZHero": dynamic(() => import("../components/EZHero"), { ssr: false }),

  // Feature components
  "/features/FeatureOne": dynamic(() => import("../components/features/FeatureOne"), { ssr: false }),
  "FeatureOne": dynamic(() => import("../components/features/FeatureOne"), { ssr: false }),
  "/features/FeatureTwo": dynamic(() => import("../components/features/FeatureTwo"), { ssr: false }),
  "FeatureTwo": dynamic(() => import("../components/features/FeatureTwo"), { ssr: false }),

  // About components
  "/about/AboutOne": dynamic(() => import("../components/about/AboutOne"), { ssr: false }),
  "AboutOne": dynamic(() => import("../components/about/AboutOne"), { ssr: false }),
  "/about/AboutTwo": dynamic(() => import("../components/about/AboutTwo"), { ssr: false }),
  "AboutTwo": dynamic(() => import("../components/about/AboutTwo"), { ssr: false }),

  // Counter components
  "/counter/CounterOne": dynamic(() => import("../components/counter/CounterOne"), { ssr: false }),
  "CounterOne": dynamic(() => import("../components/counter/CounterOne"), { ssr: false }),
  "/counter/CounterTwo": dynamic(() => import("../components/counter/CounterTwo"), { ssr: false }),
  "CounterTwo": dynamic(() => import("../components/counter/CounterTwo"), { ssr: false }),

  // Project components
  "/project/ProjectOne": dynamic(() => import("../components/project/ProjectOne"), { ssr: false }),
  "ProjectOne": dynamic(() => import("../components/project/ProjectOne"), { ssr: false }),

  // Skills components
  "/skills/SkillOne": dynamic(() => import("../components/skills/SkillOne"), { ssr: false }),
  "SkillOne": dynamic(() => import("../components/skills/SkillOne"), { ssr: false }),

  // Team components
  "/team/TeamOne": dynamic(() => import("../components/team/TeamOne"), { ssr: false }),
  "TeamOne": dynamic(() => import("../components/team/TeamOne"), { ssr: false }),
  "/team/TeamTwo": dynamic(() => import("../components/team/TeamTwo"), { ssr: false }),
  "TeamTwo": dynamic(() => import("../components/team/TeamTwo"), { ssr: false }),
  "/TeamList": dynamic(() => import("../components/TeamList"), { ssr: false }),
  "TeamList": dynamic(() => import("../components/TeamList"), { ssr: false }),
  "/TeamDetails": dynamic(() => import("../components/TeamDetails"), { ssr: false }),
  "TeamDetails": dynamic(() => import("../components/TeamDetails"), { ssr: false }),

  // Video components
  "/video/VideoOne": dynamic(() => import("../components/video/VideoOne"), { ssr: false }),
  "VideoOne": dynamic(() => import("../components/video/VideoOne"), { ssr: false }),
  "/video/VideoTwo": dynamic(() => import("../components/video/VideoTwo"), { ssr: false }),
  "VideoTwo": dynamic(() => import("../components/video/VideoTwo"), { ssr: false }),

  // Testimonial components
  "/testimonial/TestimonialOne": dynamic(() => import("../components/testimonial/TestimonialOne"), { ssr: false }),
  "TestimonialOne": dynamic(() => import("../components/testimonial/TestimonialOne"), { ssr: false }),
  "/testimonial/TestimonialTwo": dynamic(() => import("../components/testimonial/TestimonialTwo"), { ssr: false }),
  "TestimonialTwo": dynamic(() => import("../components/testimonial/TestimonialTwo"), { ssr: false }),
  "/testimonial/TestimonialFour": dynamic(() => import("../components/testimonial/TestimonialFour"), { ssr: false }),
  "TestimonialFour": dynamic(() => import("../components/testimonial/TestimonialFour"), { ssr: false }),

  // Blog components
  "/blog/BlogSectionThree": dynamic(() => import("../components/blog/BlogSectionThree"), { ssr: false }),
  "BlogSectionThree": dynamic(() => import("../components/blog/BlogSectionThree"), { ssr: false }),
  "/blog/BlogSectionTwo": dynamic(() => import("../components/blog/BlogSectionTwo"), { ssr: false }),
  "BlogSectionTwo": dynamic(() => import("../components/blog/BlogSectionTwo"), { ssr: false }),
  "/blog/BlogOne": dynamic(() => import("../components/blog/BlogOne"), { ssr: false }),
  "BlogOne": dynamic(() => import("../components/blog/BlogOne"), { ssr: false }),
  "/blog/BlogTwo": dynamic(() => import("../components/blog/BlogTwo"), { ssr: false }),
  "BlogTwo": dynamic(() => import("../components/blog/BlogTwo"), { ssr: false }),
  "/blog/BlogThree": dynamic(() => import("../components/blog/BlogThree"), { ssr: false }),
  "BlogThree": dynamic(() => import("../components/blog/BlogThree"), { ssr: false }),

  // Brand components
  "/brand/BrandOne": dynamic(() => import("../components/brand/BrandOne"), { ssr: false }),
  "BrandOne": dynamic(() => import("../components/brand/BrandOne"), { ssr: false }),
  "/brand/BrandTwo": dynamic(() => import("../components/brand/BrandTwo"), { ssr: false }),
  "BrandTwo": dynamic(() => import("../components/brand/BrandTwo"), { ssr: false }),

  // Causes components
  "/causes/CausesOne": dynamic(() => import("../components/causes/CausesOne"), { ssr: false }),
  "CausesOne": dynamic(() => import("../components/causes/CausesOne"), { ssr: false }),
  "/causes/CausesTwo": dynamic(() => import("../components/causes/CausesTwo"), { ssr: false }),
  "CausesTwo": dynamic(() => import("../components/causes/CausesTwo"), { ssr: false }),
  "/causes/CausesThree": dynamic(() => import("../components/causes/CausesThree"), { ssr: false }),
  "CausesThree": dynamic(() => import("../components/causes/CausesThree"), { ssr: false }),
  "/causes/CausesFour": dynamic(() => import("../components/causes/CausesFour"), { ssr: false }),
  "CausesFour": dynamic(() => import("../components/causes/CausesFour"), { ssr: false }),

  // CTA components
  "/cta/CtaOne": dynamic(() => import("../components/cta/CtaOne"), { ssr: false }),
  "CtaOne": dynamic(() => import("../components/cta/CtaOne"), { ssr: false }),

  // Contact components
  "/contact/ContactForm": dynamic(() => import("../components/contact/ContactForm"), { ssr: false }),
  "ContactForm": dynamic(() => import("../components/contact/ContactForm"), { ssr: false }),
  "/contact/ContactInfo": dynamic(() => import("../components/contact/ContactInfo"), { ssr: false }),
  "ContactInfo": dynamic(() => import("../components/contact/ContactInfo"), { ssr: false }),
  "/contact/ContactMap": dynamic(() => import("../components/contact/ContactMap"), { ssr: false }),
  "ContactMap": dynamic(() => import("../components/contact/ContactMap"), { ssr: false }),

  // Donation components
  "/donation/DonateOne": dynamic(() => import("../components/donation/DonateOne"), { ssr: false }),
  "DonateOne": dynamic(() => import("../components/donation/DonateOne"), { ssr: false }),
  "/donation/DonationContent": dynamic(() => import("../components/donation/DonationContent"), { ssr: false }),
  "DonationContent": dynamic(() => import("../components/donation/DonationContent"), { ssr: false }),
  "/donation/DonationDetailsContent": dynamic(() => import("../components/donation/DonationDetailsContent"), { ssr: false }),
  "DonationDetailsContent": dynamic(() => import("../components/donation/DonationDetailsContent"), { ssr: false }),
  "/donation/DonationListContent": dynamic(() => import("../components/donation/DonationListContent"), { ssr: false }),
  "DonationListContent": dynamic(() => import("../components/donation/DonationListContent"), { ssr: false }),

  // Events components
  "/events/RecentEventsOne": dynamic(() => import("../components/events/RecentEventsOne"), { ssr: false }),
  "RecentEventsOne": dynamic(() => import("../components/events/RecentEventsOne"), { ssr: false }),
  "/events/RecentEventsTwo": dynamic(() => import("../components/events/RecentEventsTwo"), { ssr: false }),
  "RecentEventsTwo": dynamic(() => import("../components/events/RecentEventsTwo"), { ssr: false }),

  // FAQ components
  "/faq/FaqOne": dynamic(() => import("../components/faq/FaqOne"), { ssr: false }),
  "FaqOne": dynamic(() => import("../components/faq/FaqOne"), { ssr: false }),

  // Gallery components
  "/gallery/GalleryOne": dynamic(() => import("../components/gallery/GalleryOne"), { ssr: false }),
  "GalleryOne": dynamic(() => import("../components/gallery/GalleryOne"), { ssr: false }),
  "/GallerySlider": dynamic(() => import("../components/GallerySlider"), { ssr: false }),
  "GallerySlider": dynamic(() => import("../components/GallerySlider"), { ssr: false }),

  // Help People components
  "/help-people/HelpPeopleOne": dynamic(() => import("../components/help-people/HelpPeopleOne"), { ssr: false }),
  "HelpPeopleOne": dynamic(() => import("../components/help-people/HelpPeopleOne"), { ssr: false }),
  "/help-people/HelpPeopleTwo": dynamic(() => import("../components/help-people/HelpPeopleTwo"), { ssr: false }),
  "HelpPeopleTwo": dynamic(() => import("../components/help-people/HelpPeopleTwo"), { ssr: false }),

  // Two Section components
  "/two-section/TwoSectionOne": dynamic(() => import("../components/two-section/TwoSectionOne"), { ssr: false }),
  "TwoSectionOne": dynamic(() => import("../components/two-section/TwoSectionOne"), { ssr: false }),
  "/two-section/TwoSectionTwo": dynamic(() => import("../components/two-section/TwoSectionTwo"), { ssr: false }),
  "TwoSectionTwo": dynamic(() => import("../components/two-section/TwoSectionTwo"), { ssr: false }),

  // Header/Footer
  "/Header": dynamic(() => import("../components/Header"), { ssr: false }),
  "Header": dynamic(() => import("../components/Header"), { ssr: false }),
  "/Footer": dynamic(() => import("../components/Footer"), { ssr: false }),
  "Footer": dynamic(() => import("../components/Footer"), { ssr: false }),
  "/Navbar": dynamic(() => import("../components/Navbar"), { ssr: false }),
  "Navbar": dynamic(() => import("../components/Navbar"), { ssr: false }),

  // Content components
  "/HTML": dynamic(() => import("../components/HTML"), { ssr: false }),
  "HTML": dynamic(() => import("../components/HTML"), { ssr: false }),
  "/GridList": dynamic(() => import("../components/GridList"), { ssr: false }),
  "GridList": dynamic(() => import("../components/GridList"), { ssr: false }),
  "/ContentList": dynamic(() => import("../components/ContentList"), { ssr: false }),
  "ContentList": dynamic(() => import("../components/ContentList"), { ssr: false }),
  "/ContentDetails": dynamic(() => import("../components/ContentDetails"), { ssr: false }),
  "ContentDetails": dynamic(() => import("../components/ContentDetails"), { ssr: false }),
  "/ContentDownload": dynamic(() => import("../components/ContentDownload"), { ssr: false }),
  "ContentDownload": dynamic(() => import("../components/ContentDownload"), { ssr: false }),
  "/CardBox": dynamic(() => import("../components/CardBox"), { ssr: false }),
  "CardBox": dynamic(() => import("../components/CardBox"), { ssr: false }),
  "/BannerText": dynamic(() => import("../components/BannerText"), { ssr: false }),
  "BannerText": dynamic(() => import("../components/BannerText"), { ssr: false }),
  "/BannerImage": dynamic(() => import("../components/BannerImage"), { ssr: false }),
  "BannerImage": dynamic(() => import("../components/BannerImage"), { ssr: false }),
  "/SocialLinks": dynamic(() => import("../components/SocialLinks"), { ssr: false }),
  "SocialLinks": dynamic(() => import("../components/SocialLinks"), { ssr: false }),

  // Stories components
  "/StoriesList": dynamic(() => import("../components/StoriesList"), { ssr: false }),
  "StoriesList": dynamic(() => import("../components/StoriesList"), { ssr: false }),
  "/StoriesDetail": dynamic(() => import("../components/StoriesDetail"), { ssr: false }),
  "StoriesDetail": dynamic(() => import("../components/StoriesDetail"), { ssr: false }),
  "/StoriesAuthor": dynamic(() => import("../components/StoriesAuthor"), { ssr: false }),
  "StoriesAuthor": dynamic(() => import("../components/StoriesAuthor"), { ssr: false }),

  // Donate components
  "/DonateGrid": dynamic(() => import("../components/DonateGrid"), { ssr: false }),
  "DonateGrid": dynamic(() => import("../components/DonateGrid"), { ssr: false }),
  "/DonateGoal": dynamic(() => import("../components/DonateGoal"), { ssr: false }),
  "DonateGoal": dynamic(() => import("../components/DonateGoal"), { ssr: false }),

  // Breadcrumb
  "/common/breadcrumb/Breadcrumb": dynamic(() => import("../components/common/breadcrumb/Breadcrumb"), { ssr: false }),
  "Breadcrumb": dynamic(() => import("../components/common/breadcrumb/Breadcrumb"), { ssr: false }),
};

export function resolveComponent(compType, compPath) {
  const path = compPath || `/${compType}`;
  return registry[path] || registry[compType] || null;
}

export function composeContentLocal(content, globals, isPreview) {
  let _CONTENT;
  if (isPreview && isPreview.comp) {
    _CONTENT = content.filter((itm) => itm.comp_type === isPreview.comp);
  } else {
    _CONTENT = content;
  }

  const compList = _CONTENT.map((itm) => {
    if (!itm.comp_global) {
      const resolved = resolveComponent(itm.comp_type, itm.comp_path);
      if (!resolved) {
        console.warn(`[ez-nacc] Component not found in registry: type="${itm.comp_type}", path="${itm.comp_path}"`);
      }
      return resolved;
    } else {
      const globalContentList = globals.filter((itm2) => {
        return itm2.global_title === itm.comp_type;
      });

      return globalContentList[0]?.global_content.map((itm2) => {
        const resolved = resolveComponent(itm2.comp_type, itm2.comp_path);
        if (!resolved) {
          console.warn(`[ez-nacc] Global component not found in registry: type="${itm2.comp_type}", path="${itm2.comp_path}"`);
        }
        return resolved;
      });
    }
  });

  const contentList = _CONTENT.map((itm) => {
    if (!itm.comp_global) {
      return itm;
    } else {
      const globalContentList = globals.filter((itm2) => {
        return itm2.global_title === itm.comp_type;
      });
      return globalContentList[0]?.global_content;
    }
  });

  const compListAll = compList.flat();
  const contentListAll = contentList.flat();

  return { compListAll, contentListAll };
}
