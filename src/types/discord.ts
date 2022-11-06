import { GenericObject } from ".";

export interface DiscordDataPackage {
    account: DiscordDataPackageAccount;
    activities_e?: any;
    activities_w?: any;
    activity: DiscordDataPackageActivity;
    messages: DiscordDataPackageMessages;
    programs: DiscordDataPackagePrograms;
    servers: DiscordDataPackageServers;
};

export interface DiscordDataPackageAccount {
    applications: DiscordDataPackageApplication[];
};

export interface DiscordDataPackageApplication {
    id: string;
    name: string;
    icon?: string;
    description: string;
    summary: string;
    type?: any;
    hook: boolean;
    bot_public: boolean;
    bot_require_grant_code: boolean;
    verify_key: string;
    flags: number;
    redirect_uris: string[];
    rpc_application_state: number;
    store_application_state: number;
    creator_monetization_state: number;
    verification_state: number;
    interaction_endpoint_url?: string;
    interaction_public: boolean;
    integration_require_code_grant: boolean;
    discoverability_state: number;
    discoverability_eligibility_flags: number;
    bot: DiscordDataPackageBot;
}

export interface DiscordDataPackageBot {
    id: string;
    username: string;
    avatar: string;
    avatar_decoration?: any;
    discriminator: string;
    public_flags: number;
    bot: boolean;
}

export interface DiscordDataPackageActivity {
    analytics: DiscordDataPackageAnalytics;
    modeling: DiscordDataPackageModeling;
    reporting: DiscordDataPackageReporting;
    tns: DiscordDataPackageTNS;
};

export interface DiscordDataPackageAnalytics {
    event_entries: DiscordDataPackageAnalyticsEntry[];
};

export interface DiscordDataPackageAnalyticsEntry {
    events: DiscordDataPackageAnalyticsEvent[];
}

export interface DiscordDataPackageAnalyticsEvent {
    event_type: string;
    event_id: string;
    event_source: string;
    user_id: string;
    domain: string;
    freight_hostname: string;
    ip: string;
    day: string;
    chosen_locale: string;
    detected_locale: string;
    user_is_authenticated: boolean;
    browser: string;
    cfuid: string;
    os: string;
    os_version: string;
    os_arch: string;
    client_build_number: string;
    release_channel: string;
    client_version: string;
    city: string;
    country_code: string;
    region_code: string;
    time_zone: string;
    hostname: string;
    connect_time: string; // TODO: Should this be casted to a number?
    rtc_connection_id: string;
    connect_count: string;
    audio_subsystem: string;
    audio_layer: string;
    accepted_languages: string[];
    accepted_languages_weighted: string[];
    _hour_pt: Date;
    _hour_utc: Date;
    _day_pt: Date;
    _day_utc: Date;
    client_send_timestamp: string;
    client_track_timestamp: string;
    timestamp: string;
};


export interface DiscordDataPackageModeling { 
    modeling_entries: DiscordDataPackageModelingEntry[];
};

export interface DiscordDataPackageModelingEntry {
    events: DiscordDataPackageModelingEvent[];
}

export interface DiscordDataPackageModelingEvent {
    event_type:                     string;
    event_id:                       string;
    event_source:                   string;
    user_id:                        string;
    domain:                         string;
    freight_hostname:               string;
    ip:                             string;
    day:                            string;
    chosen_locale:                  string;
    detected_locale:                string;
    user_is_authenticated:          boolean;
    browser_user_agent:             string;
    browser:                        string;
    device:                         string;
    cfduid:                         string;
    os:                             string;
    os_version:                     string;
    os_sdk_version:                 string;
    client_build_number:            string;
    client_version:                 string;
    client_performance_cpu:         number;
    client_performance_memory:      string;
    city:                           string;
    country_code:                   string;
    region_code:                    string;
    time_zone:                      string;
    isp:                            string;
    message_id:                     string;
    channel:                        string;
    channel_type:                   string;
    is_friend:                      boolean;
    private:                        boolean;
    num_attachments:                string;
    max_attachment_size:            string;
    length:                         string;
    word_count:                     string;
    mention_everyone:               boolean;
    emoji_unicode:                  string;
    emoji_custom:                   string;
    emoji_custom_external:          string;
    emoji_managed:                  string;
    emoji_managed_external:         string;
    emoji_animated:                 string;
    emoji_only:                     boolean;
    num_embeds:                     string;
    attachment_ids:                 string[];
    has_spoiler:                    boolean;
    accessibility_support_enabled:  boolean;
    probably_has_markdown:          boolean;
    accessibility_features:         string;
    user_is_bot:                    boolean;
    sticker_ids:                    any[];
    message_type:                   string;
    system_locale:                  string;
    components:                     any[];
    is_first_message:               boolean;
    cfduid_signed:                  boolean;
    cpu_core_count:                 string;
    _source_job_id:                 string;
    _ingest_ts:                     string;
    accepted_languages:             string[];
    accepted_languages_weighted:    string[];
    primary_accepted_language:      string;
    attachment_content_types:       any[];
    attachment_mimetypes:           any[];
    mention_role_ids:               any[];
    mutual_guild_ids:               any[];
    attachment_sizes:               any[];
    attachment_widths:              any[];
    attachment_heights:             any[];
    attachment_description_lengths: any[];
    _hour_pt:                       Date;
    _hour_utc:                      Date;
    _day_pt:                        Date;
    _day_utc:                       Date;
    client_send_timestamp:          string;
    client_track_timestamp:         string;
    timestamp:                      string;
}

export interface DiscordDataPackageReporting { 
    reporting_entries: DiscordDataPackageReportingEntry[];
};

export interface DiscordDataPackageReportingEntry {
    events: DiscordDataPackageReportingEvent[];
}
export interface DiscordDataPackageReportingEvent {
    event_type:                     string;
    event_id:                       string;
    event_source:                   string;
    user_id:                        string;
    domain:                         string;
    freight_hostname:               string;
    ip:                             string;
    day:                            string;
    chosen_locale:                  string;
    detected_locale:                string;
    user_is_authenticated:          boolean;
    browser_user_agent:             string;
    browser:                        string;
    device:                         string;
    cfduid:                         string;
    os:                             string;
    os_version:                     string;
    os_sdk_version:                 string;
    client_build_number:            string;
    client_version:                 string;
    city:                           string;
    country_code:                   string;
    region_code:                    string;
    time_zone:                      string;
    isp:                            string;
    message_id:                     string;
    channel:                        string;
    channel_type:                   string;
    is_friend:                      boolean;
    private:                        boolean;
    num_attachments:                string;
    max_attachment_size:            string;
    length:                         string;
    word_count:                     string;
    mention_everyone:               boolean;
    emoji_unicode:                  string;
    emoji_custom:                   string;
    emoji_custom_external:          string;
    emoji_managed:                  string;
    emoji_managed_external:         string;
    emoji_animated:                 string;
    emoji_only:                     boolean;
    num_embeds:                     string;
    attachment_ids:                 any[];
    has_spoiler:                    boolean;
    accessibility_support_enabled:  boolean;
    probably_has_markdown:          boolean;
    accessibility_features:         string;
    user_is_bot:                    boolean;
    sticker_ids:                    any[];
    message_type:                   string;
    system_locale:                  string;
    components:                     any[];
    is_first_message:               boolean;
    cfduid_signed:                  boolean;
    accepted_languages:             any[];
    accepted_languages_weighted:    any[];
    attachment_content_types:       any[];
    attachment_mimetypes:           any[];
    mention_role_ids:               any[];
    mutual_guild_ids:               any[];
    attachment_sizes:               any[];
    attachment_widths:              any[];
    attachment_heights:             any[];
    attachment_description_lengths: any[];
    _hour_pt:                       Date;
    _hour_utc:                      Date;
    _day_pt:                        Date;
    _day_utc:                       Date;
    client_send_timestamp:          string;
    client_track_timestamp:         string;
    timestamp:                      string;
}

export interface DiscordDataPackageTNS { 
    tns_entries: DiscordDataPackageTNSEntry[];
};

export interface DiscordDataPackageTNSEntry{
    tns_events: DiscordDataPackageTNSEvent[];
}

export interface DiscordDataPackageTNSEvent {
    event_type:                  string;
    event_id:                    string;
    event_source:                string;
    user_id:                     string;
    domain:                      string;
    freight_hostname:            string;
    freight_id:                  string;
    ip:                          string;
    day:                         string;
    chosen_locale:               string;
    detected_locale:             string;
    user_is_authenticated:       boolean;
    browser:                     string;
    os:                          string;
    os_version:                  string;
    os_arch:                     string;
    client_build_number:         string;
    release_channel:             string;
    client_version:              string;
    city:                        string;
    country_code:                string;
    region_code:                 string;
    time_zone:                   string;
    isp:                         string;
    session:                     string;
    user_is_bot:                 boolean;
    system_locale:               string;
    _source_job_id:              string;
    _ingest_ts:                  string;
    accepted_languages:          string[];
    accepted_languages_weighted: string[];
    _processor_source:           string;
    _hour_pt:                    Date;
    _hour_utc:                   Date;
    _day_pt:                     Date;
    _day_utc:                    Date;
    client_send_timestamp:       string;
    client_track_timestamp:      string;
    timestamp:                   string;
};

export interface DiscordDataPackageMessages { 
    records: DiscordDataPackageMessagesRecord[];
};

export interface DiscordDataPackageMessagesRecord {
    channel: { id: string, type: number };
    messages: DiscordDataPackageMessage[]
};

export interface DiscordDataPackageMessage {
    ID: string;
    Timestamp: string;
    Contents: string;
    Attachments: string;
};

/** Not sure what this is so leaving it open for now */
// export interface DiscordDataPackagePrograms {};
type DiscordDataPackagePrograms = any;

export interface DiscordDataPackageServers {
    guilds: DiscordDataPackageGuildRecord[];
    index: GenericObject;
};

export interface DiscordDataPackageGuildRecord {
    guild: { id: string; name: string; };
    "audit-log": any[];
};