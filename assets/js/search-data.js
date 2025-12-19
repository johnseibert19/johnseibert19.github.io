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
        },{id: "post-hello-world",
        
          title: "Hello world!",
        
        description: "Hello world!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/hello-world/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-am-a-co-author-on-a-genome-first-study-of-sex-chromosome-aneuploidies-provides-evidence-of-y-chromosome-dosage-effects-on-autism-risk-which-has-been-accepted-into-nature-communications",
          title: 'I am a co-author on “A genome-first study of sex chromosome aneuploidies provides...',
          description: "",
          section: "News",},{id: "news-i-have-completed-my-reu-experience-at-uc-riverside-giving-my-final-presentation-on-transcriptomic-age-acceleration-in-alzheimer-s-disease-a-predictive-modeling-approach-using-age-responsive-genes-from-gtex",
          title: 'I have completed my REU experience at UC Riverside, giving my final presentation...',
          description: "",
          section: "News",},{id: "news-i-presented-my-honors-capstone-project-at-the-eileen-g-jones-honors-college-capstone-symposium-it-was-great-to-catch-up-with-many-students-there",
          title: 'I presented my honors capstone project at the Eileen G. Jones Honors College...',
          description: "",
          section: "News",},{id: "news-i-graduated-from-commonwealth-university-bloomsburg-with-degrees-in-mathematics-and-computer-science-what-an-undergraduate-experience-this-was-and-i-would-like-to-thank-a-number-of-people-involved-that-are-impossible-to-all-name-onto-the-next-chapter-wherever-this-is",
          title: 'I graduated from Commonwealth University-Bloomsburg with degrees in mathematics and computer science. What...',
          description: "",
          section: "News",},{id: "projects-sca-population-cohorts-svurs-2022",
          title: 'SCA Population Cohorts (SVURS 2022)',
          description: "This project studies large population-based cohorts to investigate how sex chromosome aneuploidies—atypical numbers of X or Y chromosomes—significantly increase the risk of neuropsychiatric disorders like anxiety and depression.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-mahler-popken-complexity-svurs-2023-cost-research-2024",
          title: 'Mahler-Popken Complexity (SVURS 2023, COST Research 2024)',
          description: "Develops a mathematical &quot;cost function&quot; implemented in Python to determine the smallest number of 1s it takes to evaluate a number, using a set of operations in a 4-function calculator.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-sca-protective-effect-ashg-2023-non-presenting-author",
          title: 'SCA Protective Effect (ASHG 2023, non-presenting author)',
          description: "This research evaluates how variations in sex chromosome dosage influence Autism Spectrum Disorder (ASD) risk, finding that the Y chromosome increases risk while the X chromosome does not show a dosage-sensitive protective effect.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-transcriptomics-alzheimer-39-s-socal-reu-2025",
          title: 'Transcriptomics Alzheimer&amp;#39;s (SoCal REU 2025)',
          description: "Poster presentation that shows machine learning models trained on transcriptomic data from healthy brain tissue to predict biological age and demonstrates that individuals with Alzheimer’s disease exhibit accelerated transcriptomic aging compared to healthy controls.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-pds-infinite-families-cu-honors-capstone-symposium-f25",
          title: 'PDS Infinite Families (CU Honors Capstone Symposium F25)',
          description: "Extends previous constructions of Negative Latin Square-type partial difference sets (PDS) by identifying specific non-abelian groups that admit the partitions necessary to generate infinite families of non-abelian PDSs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-mads-seminar-series-f25",
          title: 'MADS Seminar Series F25',
          description: "Oral presentation recapping my 2025 REU at UC Riverside, where our team used machine learning models trained on transcriptomic data from healthy brain tissue to predict biological age and demonstrates that individuals with Alzheimer’s disease exhibit accelerated transcriptomic aging compared to healthy controls.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-maa-epadel-section-meeting-f23",
          title: 'MAA EPaDel Section Meeting F23',
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
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/John-Seibert/", "_blank");
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
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@JohnSeibert19", "_blank");
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
