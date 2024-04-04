## Ticket App - A Simple Ticket Management Application 🎫
This is a simple helpdesk support ticket management application built using MERN stack (Node.js, Express, Mongoose, React) along with tailwind.css. It allows users to create, view, update and filter tickets.

### Features:
- Create tickets with title, description, contact information.
- View a list of all tickets, categorized into 4 columns and sort by their latest update and oldest update.
- Update data of existing tickets.

### Link To 🔗:
   - [`API Document`](#APIdocumentation)
   - [`Specification`](#Specification)
   - [`Installation`](#Installation)

## API documentation
### Database Schema
| Field              | Type | Description | Required|
| :---------------- | :------: | :-------------- |:----------|
| title        |   String   | Title of the ticket | Yes |
| description           |   String   | Description of the ticket |Yes |
| contactInfo    |  String   | Contact information for the ticket |Yes |
| status |  String (enum)   | Status of the ticket (pending, accepted, resolved, rejected) |No (default: pending) |
| createdAt |  Date   | Timestamp of ticket creation |No (default: current date/time) |
| updatedAt |  Date   | Timestamp of ticket update |No (default: current date/time on update) |

### API Endpoints
The API provides the following endpoints for CRU (Create, Read, Update) operations on tickets:
1. Create Ticket (POST /tickets)
   #### Request:
    - Method: POST
    - Body: JSON containing the following fields:
      - title (string, required)
      - description (string, required)
      - contactInfo (string, required)
      - status (string, optional, defaults: "pending")
    #### Response:
     - Status Code: 201 (Created) on successful creation
     - Body: JSON containing the newly created ticket object
    #### Example:
     ```bash
      USING POST /tickets
        Request Body:
        {
          "title": "Sample Ticket",
          "description": "This is a sample ticket description",
          "contactInfo": "user@example.com",
          "status": "pending",
        }
     
        Response Body (example):
        {
          "_id": "639234b21e98762c12345678",
          "title": "Sample Ticket",
          "description": "This is a sample ticket description",
          "contactInfo": "user@example.com",
          "status": "pending",
          "createdAt": "2024-04-05T17:03:00.000Z",
          "updatedAt": "2024-04-05T17:03:00.000Z"
        }
      ```
2. Get All Tickets (GET /tickets)
    #### Request:
    - Method: GET
    #### Response:
     - Status Code: 200 (OK) on successful retrieval
     - Body: JSON array containing all ticket objects
    #### Example:
     ```bash
      GET /tickets
      Response Body (example):
      [
        {
          "_id": "639234b21e98762c12345678",
          "title": "Sample Ticket",
          "description": "This is a sample ticket description",
          "contactInfo": "user@example.com",
          "status": "pending",
          "createdAt": "2024-04-05T17:03:00.000Z",
          "updatedAt": "2024-04-05T17:03:00.000Z"
        },
        // ... other tickets
      ]
      ```
3. Update Ticket (PUT /tickets/:id)
    #### Request:
    - Method: PUT
    - URL: /tickets/ followed by the ticket ID (Object ID)
    - Body: JSON containing any of the following fields to update:
      - title (string)
      - description (string)
      - contactInfo (string)
      - status (string, enum)
    #### Response:
     - Body: JSON containing the updated ticket object
     - Status Code: 200 (OK) on successful update
     - Status Code: 404 (Not Found) if the ticket is not found
    #### Example:
     ```bash
      PUT /tickets/639234b21e98762c12345678
      Request Body:
      {
        "title": "Updated Ticket Title",
        "description": "This is an updated description"
        "contactInfo": "user@example.com",
        "status": "pending",
        "updatedAt": "2024-04-05T17:04:00.000Z"
      }
      
      Response Body (example):
      {
        "_id": "639234b21e98762c12345678",
        "title": "Updated Ticket Title",
        "description": "This is an updated description",
        "contactInfo": "user@example.com",
        "status": "pending",
        "createdAt": "2024-04-05T17:03:00.000Z",
        "updatedAt": "2024-04-05T17:04:00.000Z"
      }
      ```


## Specification 📃

1. Functionality

    This web application allows users to create, update, and view tickets.
    
    1.1. User Roles
    - User: Can create, update, and view tickets.
    
    1.2. Ticket Management
   
     1.2.1. Create Ticket

   - Users should be able to create a new ticket by providing the following information:
      - Title (required)
      - Description (required)
      - Contact Information (required)
   - The system should set today's date and last update date correctly.
   - The system should set the status of new ticket to "pending".
   - The system should validate required fields and provide appropriate error messages.
  
     
   1.2.2. View Tickets:
     - Users should be able to view a list of all tickets.
          - The list should display information for each ticket, which contains:
            - ticket id
            - title
            - description
            - status
            - contact information
            - created date
            - last update
          - The list should be sortable by latest updated time, and oldest updated time.
          - The list should be filtered by status.


      1.2.3. Update Ticket:
     - Users should be able to update an existing ticket by modifying any of the following information:
          - Title
          - Description
          - Contact Information
          - Status
      - The system should provide existing ticket data that user wants to edit.
        - Editable fields are Title, Description, Contact Information, and Status.
   - The system should validate updated fields and provide error messages if needed.

3.  User Interface (UI)
       
       2.1. Main Page
       ![Capture1](https://github.com/Palowx/ticketApp/assets/107294326/4b90dec8-dfd2-49ac-a84b-8f9916f8846b)
       
       2.2 Update Ticket
       ![Capture2](https://github.com/Palowx/ticketApp/assets/107294326/1348ecde-903e-4da6-bad1-7ff8fa0bb2ed)
       
       2.3 Create Ticket
       ![Capture3](https://github.com/Palowx/ticketApp/assets/107294326/5a129fdd-1fd3-4e93-a399-373e5a87ef1f)
4. Future Considerations
   - Remove all css modules, change to tailwind.css.
   - Reconsider if created time and updated time should be display along with the ticket or not.
   - Allow users to attach files (e.g., images, documents) to tickets.
   - Implement search functionality.
   - Implement notification for ticket creation and updates.
   - Implement dark mode.
   - Implement Draggable / Droppable 

## Installation 💻
1. Clone this repository:
```bash
git clone https://github.com/palowx/ticketApp.git
```
2. Install dependencies:
```bash
cd ticketApp
npm i
```
