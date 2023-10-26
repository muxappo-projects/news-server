
# NC News

This is a news site project developed as part of the front-end stage in my coding bootcamp, interacting with a self-built restful API and SQL database. 

## Tech Stack

**Client:** React, JS, CSS

**Server:** Node, Express, PostgreSQL

#### Versions required:

**Node**: v18.17.1

### Key features include:

- Fetching article data via `GET` requests, supporting topic, sorting, and order (asc/desc) queries using dynamic API calls and path building.

- Simple user login, verifying given usernames against data fetched from the server to restrict logins to pre-registered users.

- Support for user input to `POST` comments under articles, and `DELETE` comments authored by the currently logged-in user.

- Allowing upvotes/downvotes on articles, limiting to one vote at a time either way, utilising API `PATCH` requests

- Consistent error handling to deal with incorrect/absent user input, invalid user login information, and errors occurring during API calls.

- Various UX considerations, including:
  
  - Local loading states to notify when data fetching is in progress
  - Persistent "logged in" messages when a user is present
  - Clear "sent" notifications to prevent unnecessarily repeated user input for comments
  - Automatic navigation to the previous location in the history stack upon submission of login form, and back buttons for ease of user navigation
  - Meaningful error messages upon receipt of server errors, including "Return to safety" button to quickly bring the user back to main content


## 🔗 Links
[Hosted Site](https://main--nc-news-m.netlify.app/)

[Self-built API](https://www.linkedin.com/)


## Run / Inspect Code Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd <local-repo-name>
```

Install dependencies

```bash
  npm install
```

Preview non-prod build

```bash
  npm run dev 
  OR
  npm run preview
```

