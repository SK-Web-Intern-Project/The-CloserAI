// 1. Import dependencies
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import {
  DynamicTool,
  DynamicStructuredTool,
  WikipediaQueryRun,
} from "langchain/tools";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { SupabaseVectorStore } from "langchain/vectorstores/supabase";
import { createClient } from "@supabase/supabase-js";
import { StreamingTextResponse } from "ai";
import * as z from "zod";

// 2. Define interfaces
interface File {
  base64: string;
  content: string;
}
interface FunctionInfo {
  name: string;
  active: boolean;
}

// 3. Set up environment variables
// biome-ignore lint/style/noNonNullAssertion: <explanation>
const privateKey: string = process.env.SUPABASE_PRIVATE_KEY!;
// biome-ignore lint/style/noNonNullAssertion: <explanation>
const url: string = process.env.SUPABASE_URL!;
if (!privateKey) throw new Error("Expected env var SUPABASE_PRIVATE_KEY");
if (!url) throw new Error("Expected env var SUPABASE_URL");
