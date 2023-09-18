import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import { Toolbar, Container, useMediaQuery } from '@mui/material'

function App() {

  const mobileViewport = useMediaQuery('(max-width:600px)')

  // Need to work on Skills component a little more, specifically tablet view, its bleeding into Project component
  // Need to work on Header & Drawer, Drawer is bleeding on small view ports and Header needs to switch to mobile version sooner than current breakpoint but it's being weird for some reason

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
          <Header />
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
