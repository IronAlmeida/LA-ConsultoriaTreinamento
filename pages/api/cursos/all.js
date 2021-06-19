export default async (req, res) => {
    const aulas = {
        dp: [
            {
                nome: 'Departamento Pessoal',
                aula: 'Aula 01 - Introdução ao DP',
                //video: 'https://player.vimeo.com/video/514470296?title=0&byline=0&portrait=0'
            },
            {
                nome: 'Departamento Pessoal',
                aula: 'Aula 02 - teoria do DP',
                //video: 'https://player.vimeo.com/video/514470296?title=0&byline=0&portrait=0'  
            }
        ]
    }
    res.json({aulas})
}