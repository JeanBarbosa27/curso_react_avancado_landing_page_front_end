const GET_LANDING_PAGE = /* GraphQL*/ `
  fragment imageData on UploadFile{
    alternativeText
    url
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

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
    }
  }
`

export default GET_LANDING_PAGE
