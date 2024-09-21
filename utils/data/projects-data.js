import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Realtor App',
        description: "This  is a comprehensive real estate platform that utilizes React.js, Next.js, Node.js, AWS, MongoDB, and Tailwind CSS to deliver a seamless user experience. The site features an interactive property search tool, allowing users to browse listings with detailed information, including images, descriptions, and pricing. Backend services are powered by Node.js and AWS, ensuring scalability and efficient data handling. The frontend is built with React.js and Next.js, providing a dynamic and responsive interface that enhances user engagement. Overall, this leverages cutting-edge technologies to connect buyers, sellers, and real estate professionals in an efficient and effective manner.",
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "ReactJS", "TypeScript", "MongoDB", "AWS", "NodeJs"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Manage Help App',
        description: 'This is a user-friendly platform designed to streamline management tasks and enhance productivity. Built using React and Tailwind CSS, the site offers a sleek and modern interface that is responsive and easy to navigate. The backend is powered by Node.js and AWS, providing a robust and scalable environment for handling user data and application logic. The application enables users to manage their tasks, collaborate with team members, and track progress in real-time. Overall, the platform leverages contemporary web technologies to empower users in managing their work effectively and efficiently.',
        tools: ["NodeJs", 'Tailwind CSS', "ReactJS", "TypeScript", "MongoDB", "AWS" ],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'LeastSquares App',
        description: 'The website is built using Next.js and Tailwind CSS. The backend is powered by GraphQL and Prisma, enabling efficient data fetching and management. LeastSquares aims to support creators by offering a range of development tools tailored to enhance their workflows. By combining cutting-edge technologies with a passion for building, the company provides a platform that fosters creativity and innovation, making it easier for users to bring their ideas to life.',
        tools: ['NextJs', 'Tailwind CSS' ,'GraphQL', 'Prisma', 'MySQL'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },