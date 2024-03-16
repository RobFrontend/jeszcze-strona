import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://papofswwxqwjsiqgzzji.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhcG9mc3d3eHF3anNpcWd6emppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1MjcwNDgsImV4cCI6MjAyNjEwMzA0OH0.2C8UkSHllPcvVlzpl84R6GX9KhxOnSGvj8b7y_dKnSI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
