import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import { Toolbar, Container, useMediaQuery } from '@mui/material'

function App() {

  const mobileViewport = useMediaQuery('(max-width:600px)')

  // 3 png's in Skills Component aren't working
  // In mobile version, modals in Projects component are only displaying content for PicMe, the close buttons in this modal should be like the one from Resume
  // Modal for Resume on mobile version could use some resizing

  return (
    <>
      {!mobileViewport ?
        <>
          <Header />
          <Container component='main' maxWidth={false} disableGutters>
            <Hero />
            <Skills />
            <Projects />
            <Resume />
            <Contact />
          </Container>
        </>
        :
        <>
          <Header  />
          <Toolbar />
          <Container component='main' maxWidth={false} disableGutters>
            <Hero />
            <Skills />
            <Projects />
            <Resume />
            <Contact />
          </Container>
        </>
      }
    </>
  )
}

export default App
