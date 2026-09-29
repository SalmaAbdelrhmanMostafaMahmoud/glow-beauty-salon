// database
import {createClient} from '@supabase/supabase-js'
const supabaseUrl = 'https://tasrnjaxlphkfhpijrtk.supabase.co'
const supabaseKey = 'sb_publishable_tp71PPlH0u7Q7pxv5eFNcQ_Y2TlEvUz'
export const supabase = createClient(supabaseUrl,supabaseKey)