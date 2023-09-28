import { Typography, Box, Grid, Paper, Card, ImageList, ImageListItem, ImageListItemBar, Stack, CardContent, CardHeader, useMediaQuery } from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import javascript from '../../assets/images/skills/js.png'
import react from '../../assets/images/skills/react.png'
import vite from '../../assets/images/skills/vite.png'
import materialui from '../../assets/images/skills/materialui.png'
import html from '../../assets/images/skills/html.png'
import css from '../../assets/images/skills/css.png'
import node from '../../assets/images/skills/node.png'
import express from '../../assets/images/skills/express.png'
import mysql from '../../assets/images/skills/mysql.png'
import sequelize from '../../assets/images/skills/sequelize.png'
import mongodb from '../../assets/images/skills/mongodb.png'
import graphql from '../../assets/images/skills/graphql.png'
import git from '../../assets/images/skills/git.png'
import heroku from '../../assets/images/skills/heroku.png'
import jest from '../../assets/images/skills/jest.png'
import webpack from '../../assets/images/skills/webpack.png'
import insomnia from '../../assets/images/skills/insomnia.png'
import vscode from '../../assets/images/skills/vscode.png'

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
            img: javascript
        },
        {
            name: 'React',
            img: react
        },
        {
            name: 'Vite',
            img: vite
        },
        {
            name: 'Material UI',
            img: materialui
        },
        {
            name: 'HTML',
            img: html
        },
        {
            name: 'CSS',
            img: css
        }
    ]

    const skillsBack = [
        {
            name: 'Node',
            img: node
        },
        {
            name: 'Express',
            img: express
        },
        {
            name: 'MySQL',
            img: mysql
        },
        {
            name: 'Sequelize',
            img: sequelize
        },
        {
            name: 'MongoDB',
            img: mongodb
        },
        {
            name: 'GraphQL',
            img: graphql
        }
    ]

    const tools = [
        {
            name: 'Git',
            img: git
        },
        {
            name: 'Heroku',
            img: heroku
        },
        {
            name: 'Jest',
            img: jest
        },
        {
            name: 'Webpack',
            img: webpack
        },
        {
            name: 'Insomnia',
            img: insomnia
        },
        {
            name: 'VS Code',
            img: vscode
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