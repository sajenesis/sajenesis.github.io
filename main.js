// main.js

// Display Configuration
let display_config = {
    default_section: {
        id: 'default_section',
        content_title: 'Welcome',
        content_data: 'Please select a section from the Sections panel'
    },
    sections: {
        'About': {
            content_title: 'About',
            content_data: '<h3>Sajeel Ahmad</h3><h4>Software Engineer<h4>'
                + '<h4>New Jersey/Greater Philadelpia Area</h4>'
        },
        'Quick Info': {
            content_title: 'Quick Info',
            content_data: (
                '<h3>Education</h3>' 
                + '<p>Rutgers University - Software Engineering 2017</p><br>'
                + '<h3>Experience</h3>'
                + '<p>NRG Energy, Comcast, Start Up Company Chewhoo, Netscout Systems</p><br>'
                + '<h3>Skills</h3>'
                + '<p>Agile/Scrum, REST, MVC, Parallel Programming, Distributed Systems, '
                    + 'Test Driven Development, API/Middleware Design, Database Automation, '
                    + 'Data Processing, Logging, Integration/Automation, '
                    + 'Continuous Integration Continuous Delivery</p><br>'
                + '<h3>OS/Dev Tools</h3>'
                + '<p>Linux, Android, Nodejs, Git/Github, Nginx, CI/CD, Jenkins, Postman</p><br>'
                + '<h3>Cloud</h3><p>AWS: Lambda, S3, Dynamodb, EC2, Cloudwatch, RDS, VPC, API Gateway, '
                + 'SQS. Azure: Pipelines (CICD)</p><br>'
                + '<h3>Frameworks</h3>'
                + '<p>Django, React, Serverless Framework</p><br>'
                + '<h3>Databases</h3>'
                + '<p>SQL: MySQL, Oracle, Postgres, MS SQL Server. NoSQL: Dynamodb, Mongodb</p><br>'
                + '<h3>Programming Languages</h3>'
                + '<p>Python, C, C++, C#, Java, Javascript</p>'
            )
        },
        'Projects': {
            content_title: 'Projects',
            content_data: '<h3>Projects List unavailable at this time. '
                + 'Contact via email for Resume and/or Project Information.</h3>'
        },
        'Contact': {
            content_title: 'Contact',
            content_data: (
                '<h3>Email: eyaansa@gmail.com</h3><br>' +
                '<h3>Linkedin: <a href="https://www.linkedin.com/in/sajeel-ahmad-782aa3105">linkedin.com/in/sajeel-ahmad-782aa3105</a></h3><br>' + 
                '<h3>Github: <a href="https://www.github.com/sajenesis">github.com/sajenesis</a></h3>'
            )
        }
    }
};

class DisplayInterface {

    // Display Main Section
    static display_main_section() {

        // Create Application Container
        console.log('displaying main section');
        const application_container = document.getElementById('application_container');

        // Create Section Containers 
        const header = document.createElement('div');
        header.id = 'header';
        application_container.appendChild(header);

        const background_svg_container = document.createElement('div');
        background_svg_container.id = 'background_svg_container';
        application_container.appendChild(background_svg_container);

        const background_svg_container_foreground = document.createElement('div');
        background_svg_container_foreground.id = 'background_svg_container_foreground';
        application_container.appendChild(background_svg_container_foreground);

        const page_container = document.createElement('div');
        page_container.id = 'page_container';
        application_container.appendChild(page_container);

        const panel_container = document.createElement('div');
        panel_container.id = 'panel_container';
        page_container.appendChild(panel_container);

        const sections_container = document.createElement('div');
        sections_container.id = 'sections_container';
        page_container.appendChild(sections_container);

        // Display Default Values
        const default_title = display_config.default_section.content_title;
        const default_data = display_config.default_section.content_data;
        const content_container = document.createElement('div');
        content_container.id = 'content_container';
        content_container.innerHTML = `<h1>${default_title}</h1>${default_data}<p></p>`;
        sections_container.appendChild(content_container);

        // Create Section Panels
        let sections = display_config.sections;
        const panel_header = document.createElement('div');
        panel_header.classList.add('section_container_header');
        panel_header.innerHTML = `<h2>Sections</h2>`
        panel_container.appendChild(panel_header);
        Object.keys(sections).forEach(section_key => {
            this.add_panel_link(section_key) 
        });

        // Background SVG and Sections Container Event Listeners
        background_svg_container_foreground.classList.add('blur_content');
        panel_container.addEventListener('mousemove', e => {
            content_container.classList.add('content_container_back');
            background_svg_container.classList.add('blur_content');
            background_svg_container_foreground.classList.remove('blur_content');
        });
        panel_container.addEventListener('mouseout', e => {
            content_container.classList.remove('content_container_back');
            background_svg_container.classList.remove('blur_content');
            background_svg_container_foreground.classList.add('blur_content');
        });

        // Create Footer
        const footer = document.createElement('div');
        footer.id = 'footer';
        application_container.appendChild(footer);

        const contact_card = document.createElement('div');
        contact_card.id = 'contact_card';
        contact_card.innerHTML = '<h1>Project Links</h1><h2>Project links unavailable at this time.</h2>'
         + '<h2>Contact via email for Resume and/or Project Information</h2>';
        footer.appendChild(contact_card);

        const footer_spacer = document.createElement('div');
        footer_spacer.id = 'footer_spacer';
        footer.appendChild(footer_spacer);
    }

    // Add Panel Link Method
    static add_panel_link(panel_id) {
        const panel_data = display_config.sections[panel_id];
        const content_title = panel_data.content_title;
        const section_container = document.createElement('div');
        section_container.id = panel_id;
        section_container.innerHTML = `<h2 id=${panel_id}>${content_title}</h2>`;
        section_container.classList.add('section_container');
        panel_container.appendChild(section_container);
        section_container.addEventListener('click', () => {
            this.update_content_section(panel_id);
        });
    }

    // Update Content Section Method
    static update_content_section(section_id) {
        console.log("updating content data");
        let content_container = document.getElementById('content_container');
        let section_title = display_config.sections[section_id].content_title;
        let section_data = display_config.sections[section_id].content_data;
        content_container.innerHTML = `<h1>${section_title}</h1><p>${section_data}</p>`; 
    }
}

function initialize_page() {
    console.log('application page initializing...');
    DisplayInterface.display_main_section();
    console.log('page init complete');
}

initialize_page();
