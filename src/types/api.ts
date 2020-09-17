export type ButtonLinkProps = {
  label: string
  url: string
}

export type ImageProps = {
  alternativeText: string
  url: string
}

export type QuestionProps = {
  id: string
  question: string
  answer: string
}

export type ReviewProps = {
  id: string
  photo: ImageProps
  name: string
  text: string
}

export type SocialLinksProps = {
  id: string
  title: string
  url: string
}

export type TechIconProps = {
  id: string
  image: ImageProps
  title: string
}

export type ConceptsProps = {
  id: string
  title: string
}

export type ModuleProps = {
  id: string
  title: string
  subtitle: string
  description: string
}

export type AuthorsProps = {
  id: string
  photo: ImageProps
  name: string
  role: string
  socialLinks: SocialLinksProps[]
  description: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: ImageProps
}

export type AboutProjectProps = {
  image: ImageProps
  title: string
  description: string
}

export type SectionTechProps = {
  title: string
  techIcons: TechIconProps[]
}

export type SectionConceptsProps = {
  title: string
  concepts: ConceptsProps[]
}

export type SectionModulesProps = {
  title: string
  module: ModuleProps[]
}

export type SectionScheduleProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  installmentsNumber: number
  installmentPrice: number
  benefits: string
  button: ButtonLinkProps
}

export type SectionAboutUsProps = {
  title: string
  authors: AuthorsProps[]
}

export type SectionReviewsProps = {
  title: string
  review: ReviewProps[]
}

export type SectionFaqProps = {
  title: string
  questions: QuestionProps[]
}

export type LandingPageProps = {
  logo: ImageProps
  header: HeaderProps
  sectionAboutProject: AboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionSchedule: SectionScheduleProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
