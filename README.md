# UniRide - Frontend
This service is the client side of the application.

## How to Install

This section guides you through the steps to set up the UniRide project on your local machine for development and testing purposes. 

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (LTS version recommended)
- npm (usually comes with Node.js)
- Expo CLI

You can install Expo CLI globally using npm:

```bash
npm install -g expo-cli
```

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/NoSleepFullBuild/Uniride-frontend.git
   ```

   Once cloned, enter the project directory:

   ```bash
   cd Uniride-frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   After installing the dependencies, you can start the development server using the Expo CLI:

   ```bash
   npm start
   ```

   This command starts the Expo development server and opens a new tab in your default web browser with the Expo developer tools.

4. **Running the Application**

   With the development server running, you can now run the app:
   
   - **On iOS Simulator or Android Emulator:**
     Make sure you have an iOS Simulator (macOS only) or Android Emulator set up. Then, in the Expo developer tools in your browser, click on "Run on iOS Simulator" or "Run on Android Emulator".

   - **On a Physical Device:**
     Install the Expo Go app on your iOS or Android device. Scan the QR code displayed in the Expo developer tools using the Expo Go app to open your project.

### Troubleshooting

If you encounter any issues during the installation or running of the application, refer to the [Expo Documentation](https://docs.expo.dev/) or check the 'Issues' section of the UniRide repository for known issues and their solutions.


## Features
Here is a list of the main features of the application:

### Home Page
1. **Main Buttons**
   - Sign Up
   - Log In
   - Search for a Ride
   - Offer a Ride

2. **Search Bar**
   - Input for starting location
   - Input for destination
   - Date selector


### Sign Up / Log In
1. **Forms**
   - First name, last name
   - Email address
   - Password
   - Phone number

2. **Buttons**
   - Sign Up / Log In
   - Log in with social media accounts (optional)
   - Forgot password


### User Profile
1. **Profile Management**
   - Edit profile information
   - Add/Edit vehicle information for drivers
   - History of rides and bookings

2. **Security**
   - Change password


### Posting and Managing Rides
1. **Ride Posting Form**
   - Departure location
   - Destination
   - Date and time of departure
   - Number of available seats
   - Price per passenger
   - Additional details (e.g., rules for the ride)

2. **Ride Management**
   - View / Edit / Cancel a ride
   - Manage bookings (accept/refuse passengers)

### Ride Search
1. **Search Filters**
   - Date
   - Time
   - Departure and destination location
   - Carpooling options (e.g., women only, pets allowed, etc.)

2. **Search Results**
   - List of available rides
   - Information about the driver
   - Price
   - Ratings and comments

### Feedback and Reviews
1. **Feedback Form**
   - Rate a ride / a driver
   - Leave a comment

2. **Review Viewing**
   - Read reviews about drivers and rides

### Additional Features
1. **Notifications**
   - Alerts for bookings, ride changes, etc.