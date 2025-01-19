const {createClient} =  supabase

const supabaseUrl = 'https://nktdcjuytwrdqdfpwczt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rdGRjanV5dHdyZHFkZnB3Y3p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2NzYwNTQsImV4cCI6MjA1MjI1MjA1NH0.tRBKkyh54SXZ-3CaD_TP_XzNVc332_8qmxOtUOu1RGY'
const supabaseClient = createClient(supabaseUrl, supabaseKey)
// console.log(supabase)

window.supabase = supabaseClient

