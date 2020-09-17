const GET_LANDING_PAGE = /* GraphQL*/ `
  fragment imageData on UploadFile{
    alternativeText
    url
  }

  fragment socialLinks on Authors {
    socialLinks {
      id
      title
      url
    }
  }

  fragment logo on LandingPage {
    logo {
      ...imageData
      }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        ...imageData
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      image {
        ...imageData
      }
      title
      description
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        image {
          ...imageData
        }
        title
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        id
        title
      }
    }
  }

  fragment sectionModules on LandingPage {
    sectionModules {
      title
      module {
        id
        title
        subtitle
        description
      }
    }
  }

  fragment sectionSchedule on LandingPage {
    sectionSchedule {
      title
      description
    }
  }

  fragment pricingBox on LandingPage {
    pricingBox {
      totalPrice
      installmentsNumber
      installmentPrice
      benefits
      button {
        label
        url
      }
    }
  }

  fragment sectionAboutUs on LandingPage {
    sectionAboutUs {
      title
      authors {
        id
        photo {
          ...imageData
        }
        name
        role
        ...socialLinks
        description
      }
    }
  }

  fragment sectionReviews on LandingPage {
    sectionReviews {
      title
      review {
        id
        photo {
          ...imageData
        }
        name
        text
      }
    }
  }

  fragment sectionFaq on LandingPage {
    sectionFaq {
      title
      questions {
        id
        question
        answer
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
      ...sectionConcepts
      ...sectionModules
      ...sectionSchedule
      ...pricingBox
      ...sectionAboutUs
      ...sectionReviews
      ...sectionFaq
    }
  }
`

export default GET_LANDING_PAGE
