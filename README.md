# Subscriptions Customer Portal

## Description

This open-source project serves as a starting point for developers creating a customer portal from scratch that is integrated with Bold Subscriptions.

## Installation

Use the following steps to set up and configure this project:

1. Fork the repo into your workspace.

2. Clone your copy of the repo using the following command:

    ```
    $ git clone https://github.com/path/to/your/forked/version
    ```

3. Copy the `.env.example` file using the following command and update any values as necessary:

    ```
    $ cp .env.example .env
    ```

4. Ensure you are on the correct Node version using the following commands:

    ```
    $ nvm install 16
    $ nvm use 16
    ```

5. Install, build, and run yarn using the following commands:

    ```
    $ yarn
    $ yarn build
    $ yarn start
    ```

6. Navigate to the window with your local preview: 

    http://localhost:3000

## Configuration on a Shopify theme

1. In your shopify theme, add the following line to the bottom of your `theme.liquid` file before the closing `</body></html>` tags:

    ```html 
    <script src="http://localhost:3000/static/js/bundle.js" type="text/javascript"></script>
    ```

2.  Insert the following `<div>` into the subscription management page:

    1. Navigate to the page for managing subscriptions.

    2. Within the editor menu, click the **Insert HTML** button and insert: 
    
    ```html
    <div id="subscriptions-customer-portal-root"></div>
    ```

## Documentation

For more information, refer to the following resources:

* [Build a Customer Portal](https://developer.boldcommerce.com/default/guides/subscriptions-v2/customer-portals)
* [Bold Subscriptions API Specification](https://developer.boldcommerce.com/default/api/subscriptions)