import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase';

export default function HeartReaction() {
 const [count, setCount] = useState(0);
 const [hasVoted, setHasVoted] = useState(false);
 const currentMonth = new Date().toISOString().slice(0, 7); // Format: "2024-12"

 useEffect(() => {
   // Check if user has already voted
   const voted = localStorage.getItem(`heart_${currentMonth}`);
   setHasVoted(!!voted);
   
   // Fetch current count
   fetchHeartCount();
 }, []);

 const fetchHeartCount = async () => {
   const { data, error } = await supabase
     .from('heart_reactions')
     .select('count')
     .eq('month_year', currentMonth);

   if (error) {
     console.error('Error fetching heart count:', error);
     return;
   }

   // If we have data and at least one row, use that count
   if (data && data.length > 0) {
     setCount(data[0].count);
   } else {
     // If no data exists yet for this month, set count to 0
     setCount(0);
   }
 };

 const handleHeartClick = async () => {
   if (hasVoted) return;

   // Optimistic update
   setCount(prev => prev + 1);
   setHasVoted(true);

   // Store in localStorage
   localStorage.setItem(`heart_${currentMonth}`, 'true');

   // Update in Supabase
   const { error } = await supabase.rpc('increment_heart_count', {
     month_year_param: currentMonth
   });

   if (error) {
     // Revert optimistic update if failed
     setCount(prev => prev - 1);
     setHasVoted(false);
     localStorage.removeItem(`heart_${currentMonth}`);
     console.error('Error updating heart count:', error);
   }
 };

 return (
    <div className="flex flex-col items-end my-8">
     <button
       onClick={handleHeartClick}
       disabled={hasVoted}
       className={`p-4 transition-transform ${hasVoted ? 'opacity-50' : 'hover:scale-110'}`}
     >
       <svg
         className={`w-8 h-8 ${hasVoted ? 'fill-red-500' : 'fill-none stroke-current'}`}
         viewBox="0 0 24 24"
         stroke="currentColor"
         strokeWidth="1.5"
       >
         <path
           strokeLinecap="round"
           strokeLinejoin="round"
           d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
         />
       </svg>
     </button>
     <span className="text-sm">{count} polubień</span>
   </div>
 );
}