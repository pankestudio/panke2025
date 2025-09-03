export interface Project {
  id: number;
  tag?: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
}

export const siteContent = {
  hero: {
    headline: "Art that Resonates",
    subtitle: "Exploring the intersection of form, color, and emotion in a minimalist digital space.",
    imageUrl: "https://picsum.photos/1920/1080?grayscale",
  },
  about: {
    column1: {
      title: "Our Philosophy",
      text: "At pankestudio, we believe in the power of simplicity. Our work strips away the non-essential to focus on pure form and concept. We create digital and physical art that speaks a quiet but profound language, inviting viewers to find their own meaning in the spaces we design.",
    },
    column2: {
      title: "The Space",
      text: "Our studio is a sanctuary for creativity, designed with minimalist principles to foster focus and clarity. It's a physical manifestation of our artistic approach—uncluttered, intentional, and filled with light. This environment is crucial to our process, allowing ideas to breathe and evolve without distraction.",
    },
  },
  projectHighlight: {
    id: 1,
    tag: "Featured Project",
    title: "Chroma Series",
    description: "An exploration of color theory through generative digital art.",
    longDescription: "Each piece in the Chroma Series is algorithmically generated, creating unique compositions that challenge perceptions of harmony and contrast. The project reflects on the relationship between human intention and computational creativity, resulting in visuals that are both structured and unpredictable.",
    imageUrl: "https://picsum.photos/800/800?random=1",
  },
  gallery: {
    title: "Gallery",
    description: "A selection of recent works.",
    projects: [
      {
        id: 2,
        title: "Monolith",
        description: "A study in form and shadow.",
        longDescription: "Monolith is a photographic series exploring the interplay of light and shadow on brutalist architecture. The stark, geometric forms are captured in high contrast, emphasizing their monumental presence and the subtle textures of the raw concrete.",
        imageUrl: 'https://picsum.photos/600/600?random=2',
      },
      {
        id: 3,
        title: "Flow State",
        description: "Abstract digital painting.",
        longDescription: "Flow State captures the essence of movement and fluidity through digital brushstrokes. The piece is built on layers of vibrant colors and dynamic lines, creating a sense of energy and spontaneity that invites the viewer into a meditative visual experience.",
        imageUrl: 'https://picsum.photos/600/600?random=3',
      },
      {
        id: 4,
        title: "Grid System",
        description: "Generative art based on grids.",
        longDescription: "This project uses algorithms to deconstruct and reimagine the simple grid. By introducing controlled randomness, each iteration produces a unique visual structure that is at once ordered and chaotic, exploring the boundaries of digital precision.",
        imageUrl: 'https://picsum.photos/600/600?random=4',
      },
      {
        id: 5,
        title: "Echoes",
        description: "Sound visualization.",
        longDescription: "Echoes translates sound waves from field recordings into visual patterns. The length, frequency, and amplitude of the audio are mapped to color, shape, and motion, creating a synesthetic representation of the ambient sounds of nature.",
        imageUrl: 'https://picsum.photos/600/600?random=5',
      },
      {
        id: 6,
        title: "Porcelain",
        description: "3D rendered still life.",
        longDescription: "A hyper-realistic 3D rendering that studies the properties of light on ceramic surfaces. The scene is meticulously crafted to capture the delicate translucency and subtle imperfections of porcelain, blurring the line between digital and physical reality.",
        imageUrl: 'https://picsum.photos/600/600?random=6',
      },
      {
        id: 7,
        title: "Drift",
        description: "Minimalist animation.",
        longDescription: "Drift is a short, looping animation that focuses on the slow, deliberate movement of simple geometric shapes. The piece is an exercise in patience and subtlety, designed to create a calming and hypnotic effect on the viewer.",
        imageUrl: 'https://picsum.photos/600/600?random=7',
      },
    ],
  },
  contact: {
    email: "hello@pankestudio.com",
  },
};
