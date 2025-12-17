// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-presentations",
          title: "presentations",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/presentations/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-am-a-co-author-on-a-genome-first-study-of-sex-chromosome-aneuploidies-provides-evidence-of-y-chromosome-dosage-effects-on-autism-risk-which-has-been-accepted-into-nature-communications",
          title: 'I am a co-author on “A genome-first study of sex chromosome aneuploidies provides...',
          description: "",
          section: "News",},{id: "news-i-have-completed-my-reu-experience-at-ucr-riverside-giving-my-final-presentation-on-transcriptomic-age-acceleration-in-alzheimer-s-disease-a-predictive-modeling-approach-using-age-responsive-genes-from-gtex",
          title: 'I have completed my REU experience at UCR Riverside, giving my final presentation...',
          description: "",
          section: "News",},{id: "news-i-presented-my-honors-capstone-project-at-the-eileen-g-jones-honors-college-capstone-symposium-it-was-great-to-catch-up-with-many-students-there",
          title: 'I presented my honors capstone project at the Eileen G. Jones Honors College...',
          description: "",
          section: "News",},{id: "news-i-graduated-from-commonwealth-university-bloomsburg-with-two-degrees-mathematics-and-computer-science-it-was-a-heck-of-a-career-onto-the-next-chapter",
          title: 'I graduated from Commonwealth University-Bloomsburg with two degrees, mathematics and computer science. It...',
          description: "",
          section: "News",},{id: "projects-svurs-2022-geisinger",
          title: 'SVURS 2022 (Geisinger)',
          description: "This project studies large population-based cohorts to investigate how sex chromosome aneuploidies—atypical numbers of X or Y chromosomes—significantly increase the risk of neuropsychiatric disorders like anxiety and depression.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-svurs-2023-cost-research-sp-2024-cu-bloom",
          title: 'SVURS 2023, Cost Research Sp 2024 (CU-Bloom)',
          description: "Develops a mathematical &quot;cost function&quot; implemented in Python to determine the smallest algorithmic description of an integer by evaluating various subroutines.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-ashg-2023-geisinger",
          title: 'ASHG 2023 (Geisinger)',
          description: "This research evaluates how variations in sex chromosome dosage influence Autism Spectrum Disorder (ASD) risk, finding that the Y chromosome increases risk while the X chromosome does not show a dosage-sensitive protective effect.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-socal-reu-2025-ucr",
          title: 'SoCal REU 2025 (UCR)',
          description: "Poster presentation that shows machine learning models trained on transcriptomic data from healthy brain tissue to predict biological age and demonstrates that individuals with Alzheimer’s disease exhibit accelerated transcriptomic aging compared to healthy controls.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-cu-honors-capstone-symposium-cu-bloom",
          title: 'CU Honors Capstone Symposium (CU-Bloom)',
          description: "Extends previous constructions of Negative Latin Square-type partial difference sets (PDS) by identifying specific non-abelian groups that admit the partitions necessary to generate infinite families of non-abelian PDSs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-mads-seminar-series-fall-2025-ucr",
          title: 'MADS Seminar Series Fall 2025 (UCR)',
          description: "Oral presentation recapping my 2025 REU at UC Riverside, where our team used machine learning models trained on transcriptomic data from healthy brain tissue to predict biological age and demonstrates that individuals with Alzheimer’s disease exhibit accelerated transcriptomic aging compared to healthy controls.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-epadel-fall-2023-cu-bloom",
          title: 'EPaDel Fall 2023 (CU-Bloom)',
          description: "This presentation defines a sequential function for integers using primitive recursive functions and utilizes Python to computationally demonstrate that the function&#39;s upper bound.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/John%20Seibert%20-%20CV%20(Dec.%202025).pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6D%73%38%31%31%38%35@%63%6F%6D%6D%6F%6E%77%65%61%6C%74%68%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/johnseibert19", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/john-seibert", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=3V3x0-0AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
