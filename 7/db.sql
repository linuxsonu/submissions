CREATE INDEX index_name
ON public.accounts (id, name);

CREATE INDEX index_name
ON public.campaigns (id, account_id,name, start_date,end_date);

CREATE INDEX index_name
ON public.clicks (id, compaign_id);

