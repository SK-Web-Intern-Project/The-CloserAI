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
