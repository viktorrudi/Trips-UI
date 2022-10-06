# A project made in 4 hours

This project was a part of a technical task in an interview with a company for a role as a front end developer. There are many improvements which can be done, but this should serve as a representation of a solid base using a scaleable architecture.

# How to run

This application was made with CRA with no extra configurations, so you can run it using `npm run start`.

# Seeds

To change the visible features in the UI, update the TRIPS_SEED constant in `src/mocking/seeds`. There is no API connection with the outside world when using this application, as it all just goes through Mirages mock server.

# Testing

There are a few unit tests written in Jest, which you can find under the **trips** feature. There is also set up a faker to be used for the unit tests in the mocks folder under the feature.

# Technologies

- Typescript
- React
- React Query
- Jest
- Chakra UI
- Sass
- Miragejs
