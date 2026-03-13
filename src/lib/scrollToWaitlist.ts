/**
 * Scrolls to the #waitlist section on the home page.
 * If already on home page, scrolls directly. Otherwise navigates to /#waitlist.
 */
export function scrollToWaitlist(navigate: (path: string) => void) {
  const waitlistEl = document.getElementById('waitlist');
  if (waitlistEl) {
    waitlistEl.scrollIntoView({ behavior: 'smooth' });
  } else {
    navigate('/#waitlist');
  }
}
