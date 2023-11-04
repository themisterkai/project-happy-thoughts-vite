<h1 align="center">
  <a href="">
    <img src="/src/assets/happy-thoughts.svg" alt="Project Banner Image">
  </a>
</h1>

# Happy Thoughts Project

This projects builds a lightweight Twitter / X clone

### Running the code

```bash
npm i && code . && npm run dev
```

### Description

This project has implemented all the basic requirements as well as the intermediate and advanced stretch goals.

- [x] Page should follow the design
- [x] Displays a list of thoughts, showing the newest thoughts at the top
- [x] Thought container shows the message, date, and like count
- [x] Users are able to post new thoughts
- [x] A heart button that can send a like on a thought (Note: I chose to implement it in a way that a user can only like a thought once)
- [x] The app adapts to the different viewports
- [x] Character counter which turns red when user goes over the allowed count
- [x] Showing a user-friendly error when the message is either too short or too long
- [x] Keeps a count of both the number of likes the user has liked, and also which thought they had liked. These are currently stored in localStorage,
- [x] Adding a new thought is animated
- [x] Added an initial loading page to the app while we wait for the API pull to complete
- [x] We are using optimistic updates when adding a thought and hearting a thought. These will eventually get replaced by data being pulled from the API.

### View it live

[https://kai-happy-thoughts.netlify.app/](https://kai-happy-thoughts.netlify.app/)
