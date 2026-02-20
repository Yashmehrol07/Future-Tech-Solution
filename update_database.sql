-- Copy and paste this code into the Supabase SQL Editor to update your table

-- 1. Add the new Pincode and Address columns
ALTER TABLE inquiries 
ADD COLUMN IF NOT EXISTS pincode text,
ADD COLUMN IF NOT EXISTS address text;

-- 2. Verify it worked by selecting the table columns (optional)
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'inquiries';
