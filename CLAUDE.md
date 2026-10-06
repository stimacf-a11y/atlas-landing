# CLAUDE.md

Notes for Claude Code when working in this repo. Keep this file for
operational notes that don't belong in README.md (end-user/deploy docs)
or in code comments.

## DNS / email authentication — pending Route 53 migration

The domain `cpexs.com` is currently hosted on **Wix DNS**
(`ns6.wixdns.net` / `ns7.wixdns.net` — confirmed authoritative via NS
lookup on 2026-10-06). The plan is to eventually move DNS to **AWS
Route 53**. Record values that must be carried over when that migration
happens:

### DMARC (`_dmarc.cpexs.com`, TXT)

```
v=DMARC1; p=none; rua=mailto:stimacf@cpexs.com
```

- Created in Wix on 2026-10-06 (per user).
- **Status as of 2026-10-06: NOT YET RESOLVING.** A direct DNS query
  (`_dmarc.cpexs.com` TXT via `8.8.8.8`) returns `NXDOMAIN` — the record
  is not publicly visible yet. Other records on the same domain (root
  TXT/SPF, MX) resolve correctly, and Wix is confirmed as the correct
  authoritative NS, so this isn't a delegation problem. Likely causes:
  - DNS propagation delay (can take minutes to hours after creating a
    record in Wix).
  - The "Host"/"Name" field in Wix's TXT record UI was entered wrong —
    Wix sometimes auto-appends the domain, which can turn `_dmarc` into
    `_dmarc.cpexs.com.cpexs.com` instead of `_dmarc.cpexs.com`. (Checked
    `_dmarc.cpexs.com.cpexs.com` too — also NXDOMAIN, so if this is the
    cause the record may have landed somewhere else entirely, not that
    exact doubled name.)
  - **Action:** re-check the record in the Wix DNS panel — the "Host"
    field should be exactly `_dmarc` (not `_dmarc.cpexs.com`) — and
    re-verify resolution before porting to Route 53.

### Other current records at `cpexs.com` (for reference when rebuilding the zone in Route 53)

- `TXT` (root): `v=spf1 include:_spf.google.com ~all` (SPF)
- `TXT` (root): `google-site-verification=2TMcazZv7ErCEve0JOVF-sMF9WAMSdnJuoMb1URNVrY`
- `MX` (root): `10 aspmx.l.google.com.` (Google Workspace mail)
- `NS`: `ns6.wixdns.net.`, `ns7.wixdns.net.` (current, pre-migration)

### SES DKIM

DKIM verification status for `cpexs.com` in AWS SES has **not been
checked yet from this environment** — the AWS credentials available in
this sandbox (`AWS_ACCESS_KEY_ID=proxy-injected`) are placeholders, not
real AWS credentials; a `sesv2:GetEmailIdentity` call against them fails
with `UnrecognizedClientException` in every likely region. Checking this
requires either real AWS credentials in the environment or the user
pulling the DKIM CNAME records directly from the SES console
(**SES → Verified identities → cpexs.com → DKIM authentication**) so
they can be added here and then to Route 53 alongside the DMARC record.
