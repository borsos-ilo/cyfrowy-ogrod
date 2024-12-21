// The 'utils' (utilities) folder is typically used to store reusable helper functions, configuration files, 
// and common functionality that isn't specific to any particular component or page. Think of it as a toolbox 
// that contains general-purpose code that might be needed across different parts of your application.


// Common examples of what goes in utils:
// - API clients (like our Supabase setup)
// - Date formatting functions
// - Data validation helpers
// - Common calculations
// - Authentication helpers
// - Constants and configuration


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)