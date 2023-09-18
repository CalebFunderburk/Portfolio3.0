import { Typography, Box, Grid, Paper, Card, ImageList, ImageListItem, ImageListItemBar, Stack, CardContent, CardHeader, useMediaQuery } from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Skills = () => {

    const desktopViewport = useMediaQuery('(min-width: 1201px)')
    const tabletViewport = useMediaQuery('(max-width: 1200px) and (min-width: 601px)')
    const mobileViewport = useMediaQuery('(max-width: 600px)')

    // Use this function to test the viewport
    // const viewport = () => {
    //     if (desktopViewport) {
    //         return console.log('Desktop')
    //     } else if (tabletViewport) {
    //         return console.log('Tablet')
    //     } else if (mobileViewport) {
    //         return console.log('Mobile')
    //     }
    // }
    // viewport()

    const responsive = {
        tablet: {
            breakpoint: { max: 1200, min: 601 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    }

    const skillsFront = [
        {
            name: 'JavaScript',
            img: 'src/assets/images/skills/js.png'
        },
        {
            name: 'React',
            img: 'src/assets/images/skills/react.png'
        },
        {
            name: 'Vite',
            img: 'src/assets/images/skills/vite.png'
        },
        {
            name: 'Material UI',
            img: 'src/assets/images/skills/materialui.png'
        },
        {
            name: 'HTML',
            img: 'src/assets/images/skills/html.png'
        },
        {
            name: 'CSS',
            img: 'src/assets/images/skills/css.png'
        }
    ]

    const skillsBack = [
        {
            name: 'Node',
            img: 'src/assets/images/skills/node.png'
        },
        {
            name: 'Express',
            img: 'src/assets/images/skills/express.png'
        },
        {
            name: 'MySQL',
            img: 'src/assets/images/skills/mysql.png'
        },
        {
            name: 'Sequelize',
            img: 'src/assets/images/skills/sequelize.png'
        },
        {
            name: 'MongoDB',
            img: 'src/assets/images/skills/mongodb.png'
        },
        {
            name: 'GraphQL',
            img: 'src/assets/images/skills/graphql.png'
        }
    ]

    const tools = [
        {
            name: 'Git',
            img: 'src/assets/images/skills/git.png'
        },
        {
            name: 'Heroku',
            img: 'src/assets/images/skills/heroku.png'
        },
        {
            name: 'Jest',
            img: 'src/assets/images/skills/jest.png'
        },
        {
            name: 'Webpack',
            img: 'src/assets/images/skills/webpack.png'
        },
        {
            name: 'Insomnia',
            img: 'src/assets/images/skills/insomnia.png'
        },
        {
            name: 'VS Code',
            img: 'src/assets/images/skills/vscode.png'
        }
    ]

    // Notes:
    // Adjust font size on each skill on mobile view

    return (
        <>
            {tabletViewport ?
                <Box id='skills' sx={{ backgroundColor: '#e0e0e0', height: '95.5vh' }}>
                    <Typography variant='h2' align='center' sx={{ pt: '20px' }}>Skills</Typography>
                    <Stack direction='row' justifyContent='space-around' alignItems='center' spacing={2} sx={{ my: 3 }}>
                        <Card elevation={5} sx={{ maxWidth: '300px', p: 1 }}>
                            <Typography variant='h4' align='center'>Front End</Typography>
                            <ImageList sx={{ width: 285, height: 200 }} cols={3} rowHeight={85}>
                                {skillsFront.map((skill) => (
                                    <ImageListItem key={skill.name}>
                                        <img
                                            src={`${skill.img}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${skill.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt={skill.name}
                                            loading='lazy'
                                        />
                                        <ImageListItemBar
                                            subtitle={skill.name}
                                            align='center'
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Card>
                        <Card elevation={5} sx={{ maxWidth: '300px', p: 1 }}>
                            <Typography variant='h4' align='center'>Back End</Typography>
                            <ImageList sx={{ width: 285, height: 200}} cols={3} rowHeight={85}>
                                {skillsBack.map((skill) => (
                                    <ImageListItem key={skill.name}>
                                        <img
                                            src={`${skill.img}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${skill.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt={skill.name}
                                            loading='lazy'
                                        />
                                        <ImageListItemBar
                                            subtitle={skill.name}
                                            align='center'
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Card>
                    </Stack>
                    <Stack direction='row' justifyContent='space-around' alignItems='center' spacing={2}>
                        <Card elevation={5} sx={{ maxWidth: '300px', p: 1 }}>
                            <Typography variant='h4' align='center'>Tools</Typography>
                            <ImageList sx={{ width: 285, height: 200 }} cols={3} rowHeight={85}>
                                {tools.map((skill) => (
                                    <ImageListItem key={skill.name}>
                                        <img
                                            src={`${skill.img}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${skill.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt={skill.name}
                                            loading='lazy'
                                        />
                                        <ImageListItemBar
                                            subtitle={skill.name}
                                            align='center'
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Card>
                    </Stack>
                </Box>
                : mobileViewport ?
                    <Box id='skills' sx={{ backgroundColor: '#e0e0e0', height: '95vh', pt: 15 }}>
                        <Typography variant='h3' align='center'>Skills</Typography>
                        <Carousel responsive={responsive} infinite={true} centerMode={true} removeArrowOnDeviceType='tablet'>
                            <Card elevation={5} sx={{ maxWidth: '185px', p: 1 }}>
                                <Typography variant='h5' align='center'>Front End</Typography>
                                <ImageList sx={{ width: 170, height: 320 }} cols={2} rowHeight={50}>
                                    {skillsFront.map((skill) => (
                                        <ImageListItem key={skill.name}>
                                            <img
                                                src={`${skill.img}?w=164&h=164&fit=crop&auto=format`}
                                                srcSet={`${skill.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                alt={skill.name}
                                                loading='lazy'
                                            />
                                            <ImageListItemBar
                                                subtitle={skill.name}
                                                align='center'
                                                position='top'
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Card>
                            <Card elevation={5} sx={{ maxWidth: '185px', p: 1 }}>
                                <Typography variant='h5' align='center'>Back End</Typography>
                                <ImageList sx={{ width: 170, height: 320 }} cols={2} rowHeight={50}>
                                    {skillsBack.map((skill) => (
                                        <ImageListItem key={skill.name}>
                                            <img
                                                src={`${skill.img}?w=164&h=164&fit=crop&auto=format`}
                                                srcSet={`${skill.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                alt={skill.name}
                                                loading='lazy'
                                            />
                                            <ImageListItemBar
                                                subtitle={skill.name}
                                                align='center'
                                                position='top'
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Card>
                            <Card elevation={5} sx={{ maxWidth: '185px', p: 1 }}>
                                <Typography variant='h5' align='center'>Tools</Typography>
                                <ImageList sx={{ width: 170, height: 320 }} cols={2} rowHeight={50}>
                                    {tools.map((skill) => (
                                        <ImageListItem key={skill.name}>
                                            <img
                                                src={`${skill.img}?w=164&h=164&fit=crop&auto=format`}
                                                srcSet={`${skill.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                alt={skill.name}
                                                loading='lazy'
                                            />
                                            <ImageListItemBar
                                                subtitle={skill.name}
                                                align='center'
                                                position='top'
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Card>
                        </Carousel>
                    </Box>
                    :
                    <Box id='skills' sx={{ backgroundColor: '#e0e0e0', height: '95.5vh', pt: 15  }}>
                    <Typography variant='h2' align='center' sx={{ pt: '20px' }}>Skills</Typography>
                    <Stack direction='row' justifyContent='space-around' alignItems='center' spacing={1} sx={{ my: 5 }}>
                        <Card elevation={5} sx={{ maxWidth: '415px', p: 1 }}>
                            <Typography variant='h4' align='center'>Front End</Typography>
                            <ImageList sx={{ width: 385, height: 340 }} cols={3} rowHeight={125}>
                                {skillsFront.map((skill) => (
                                    <ImageListItem key={skill.name}>
                                        <img
                                            src={`${skill.img}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${skill.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt={skill.name}
                                            loading='lazy'
                                        />
                                        <ImageListItemBar
                                            subtitle={skill.name}
                                            align='center'
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Card>
                        <Card elevation={5} sx={{ maxWidth: '415px', p: 1 }}>
                            <Typography variant='h4' align='center'>Back End</Typography>
                            <ImageList sx={{ width: 385, height: 340 }} cols={3} rowHeight={125}>
                                {skillsBack.map((skill) => (
                                    <ImageListItem key={skill.name}>
                                        <img
                                            src={`${skill.img}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${skill.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt={skill.name}
                                            loading='lazy'
                                        />
                                        <ImageListItemBar
                                            subtitle={skill.name}
                                            align='center'
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Card>
                        <Card elevation={5} sx={{ maxWidth: '415px', p: 1 }}>
                            <Typography variant='h4' align='center'>Tools</Typography>
                            <ImageList sx={{ width: 385, height: 340 }} cols={3} rowHeight={125}>
                                {tools.map((skill) => (
                                    <ImageListItem key={skill.name}>
                                        <img
                                            src={`${skill.img}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${skill.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt={skill.name}
                                            loading='lazy'
                                        />
                                        <ImageListItemBar
                                            subtitle={skill.name}
                                            align='center'
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Card>
                    </Stack>
                </Box>
            }
        </>
    )
}

export default Skills