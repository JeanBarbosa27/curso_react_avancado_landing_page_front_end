export type ImageProps = {
  alternativeText: string
  url: string
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

export type LandingPageProps = {
  logo: ImageProps
  header: HeaderProps
  sectionAboutProject: AboutProjectProps
}
