export default async (req, res) => {
    const aulas = {
        dp: [
            {
                numero: 1,
                aula: 'Aula 01 - Introdução ao DP',
                padding: '50% 0 0 0',
                video: 'https://player.vimeo.com/video/514470296?title=0&byline=0&portrait=0',
            },
            {
                numero: 2,
                aula: 'Aula 02 - Teoria do DP',
                padding: '56.25% 0 0 0',
                video: 'https://player.vimeo.com/video/520254400?title=0&byline=0&portrait=0',  
            },
            {
                numero: 3,
                aula: 'Aula 03 - Conceitos do DP',
                padding: '56.25% 0 0 0',
                video: 'https://player.vimeo.com/video/508227255?title=0&byline=0&portrait=0',  
            }
        ]
    }

    res.json({aulas})
}