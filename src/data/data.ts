export const ProjectData: {
    title: string,
    description: string,
    image: string
    links: string,
    linkIcons: string[],
    tools: string[],
    id: number
    }[] = [
        {
            title: "Featured projects",
            description: "Created as part of learning process. The goal was not to just build web applications but to discover and learn new features, key concepts, tools.",
            links: "",
            image: "https://globerunner.com/wp-content/uploads/2014/05/code-1076536_1280.jpg",
            tools: [""],
            linkIcons: [""],
            id: 0
        },
        {
            title: "E-commerce store",
            description: "The biggest project that I’ve built. It contains different problems starting with fetching data from the endpoint with graphql and apollo client, ending with complex state management and localstorage. Unfortunately, I haven’t deployed it to the web, but you can check it on my GitHub. Built using react class components.",
            image: "https://user-images.githubusercontent.com/62018390/208546294-1468c617-034e-44d3-91d9-e4021a5df270.png",
            links: "https://github.com/NikitaPanasevych/junior-react",
            tools: ["https://img.icons8.com/plasticine/512/react.png","https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png"],
            linkIcons: ["https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png"],
            id: 1
        },
        {
            title: "Goalify",
            description: "Full stack To Do web application built with Next.Js, React, Typescript, Tailwind CSS, Firebase Firestore database, and Firebase services.  ",
            links: "https://github.com/NikitaPanasevych/Goalify",
            image: "https://user-images.githubusercontent.com/62018390/208548953-47472ac7-4504-49bb-8830-493847d6326d.png",
            tools: [
                "https://img.icons8.com/plasticine/512/react.png",
                "https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
                "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
            ],
            linkIcons: ["https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png"],
            id: 2
        },
]