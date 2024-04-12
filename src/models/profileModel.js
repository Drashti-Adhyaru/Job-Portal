const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    project_title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    github_link: {
        type: String
    },
    skills: {
        type: [String]
    },
    learning_outcomes: {
        type: String
    },
    profile_pic: {
        type: String
    },
    
});

const Project = mongoose.models.projects || mongoose.model("projects", projectSchema);

const experienceSchema = new mongoose.Schema({
    position: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    }
});

const Experience = mongoose.models.experiences || mongoose.model("experiences", experienceSchema);



const educationSchema = new mongoose.Schema({
    qualification: {
        type: String,
        required: true
    },
    collegeName: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    }
});

const Education = mongoose.models.educations || mongoose.model("educations", educationSchema);




const profileSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String
    },
    personalDetails: {
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        summary: {
            type: String
        },
        skills: {
            type: [String]
        },
        githubLink: {
            type: String
        },
        linkedinLink: {
            type: String
        },
        phone: {
            type: String
        },
        address: {
            type: String
        },
        profilePicLink: {
            type: String
        }
    },
    education: [Education], // Array of Education objects
    experience: [Experience], // Array of Experience objects
    projects: [Project], // Array of Project objects
    urlName: {
        type: String
    },
    theme: {
        type: String
    }
});

const Profile = mongoose.models.resumes || mongoose.model("profiles", profileSchema);

module.exports = Profile;
