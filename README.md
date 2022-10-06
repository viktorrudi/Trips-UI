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
