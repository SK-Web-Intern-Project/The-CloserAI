# THe Closer AI - Antropic Claude Clone With Langchain, Next.js, Vercel, AI SDK, and Supabase

Dynamic chatbot, fueled by Claude AI, seamlessly integrated with Amazon Web Services API gateways. Tailored for law students, this innovative tool ensures swift and insightful interactions while providing the capability to check PDF attachment files, catering to diverse needs with ease.

## Frontend

The frontend of the application is developed using Next.js and React.js, providing an intuitive and responsive user interface. It comprises the following key components:

### ModelSelector Component

The ModelSelector component allows users to choose the AI model they wish to interact with during the conversation. The currently selected model's logo is displayed, and users can switch between available models using a dedicated button.

### WelcomeBack Component

The WelcomeBack component greets users with a visually appealing welcome message when they enter the chat interface.

### VectorSelector Component

The VectorSelector component empowers users to select vector storage options for any attached files. It offers a selection of icons representing different vector storage choices, giving users the flexibility to switch between these options seamlessly.

### Main App Component

The heart of the application is the Main App component, which handles core chat functionality. This component takes care of:

- Sending and receiving messages between the user and the AI assistant.
- Presenting user and assistant messages, each with their respective avatars.
- Attaching files to messages and displaying pertinent file information.
- Enabling or disabling various functions and presenting a function selector.
- Providing keyboard shortcuts information for user convenience.

## Backend

The backend functionality is implemented using Node.js and leverages serverless functions to handle user requests and AI-related tasks. The backend is responsible for:

- Processing incoming POST requests containing messages, functions, files, and additional data.
- Managing user input and handling attached files as needed.
- Interacting with vector storage via Supabase to manage file content.
- Executing AI models and tools based on user selections.
- Delivering AI-generated responses to the frontend in a streaming format.

## Dependencies

The project relies on a combination of technologies and libraries to deliver its robust functionality:

- Next.js and React.js for creating the frontend.
- Node.js for the serverless backend functions.
- Langchain SDK for interacting with AI models and tools.
- Vercel for hosting and deployment.
- Supabase for efficient vector storage.
- @supabase/supabase-js for interfacing with Supabase.
- zod for schema validation.

## Setup

To set up the project on your local environment or deploy it to a live platform:

1. Clone the repository.
2. Navigate to both the frontend and backend directories.
3. Install required dependencies using `pnpm install` within each directory.
4. Configure environment variables within the backend.
5. Run the frontend by executing `pnpm run dev` in the frontend directory.
6. Deploy the backend to a serverless platform such as Vercel for live deployment.

## Contributions

Contributions to enhance and refine the project are encouraged and warmly welcomed! Whether you uncover issues or have innovative ideas to enhance the application, please feel free to open issues or submit pull requests.

## License

This project is licensed under the [GPL-3.0](LICENSE), which grants you the freedom to use and modify the source code within this repository, subject to the terms of the license.

