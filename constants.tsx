
import { Category, Library, Sponsor, SponsorTier } from './types';

export const Version = {
  INTERNAL: '0.0.2',
  PUBLIC: "v2026.02.02a(beta)",
};

export const SPONSORS: Sponsor[] = [
  { id: '1', name: 'Gold Sponsors Here', tier: SponsorTier.GOLD, url: '' },
  { id: '2', name: 'Silver Sponsors Here', tier: SponsorTier.SILVER, url: '' },
];

export const LIBRARIES: Library[] = [
  {
    id: 'retrofit',
    name: 'Retrofit',
    creator: 'Square',
    category: Category.NETWORKING,
    description: 'A type-safe HTTP client for Android and the JVM',
    stars: '43.9k+',
    latestVersion: '3.0.0',
    website: 'https://square.github.io/retrofit/',
    implementation: {
      groovy: "implementation 'com.squareup.retrofit2:retrofit:3.0.0'",
      kts: "implementation(\"com.squareup.retrofit2:retrofit:3.0.0\")",
      versionCatalog: "retrofit = \"3.0.0\"\nretrofit = { group = \"com.squareup.retrofit2\", name = \"retrofit\", version.ref = \"retrofit\" }"
    },
    pros: ['Excellent community support', 'Powerful Interceptors via OkHttp'],
    cons: [''],
    alternatives: ['Ktor-Client', 'OkHttp'],
    commonIssues: [{ problem: "NetworkOnMainThreadException", fix: "Wrap calls in suspend functions or use Dispatchers.IO." }]
  },
  {
    id: 'ktor-client',
    name: 'Ktor Client',
    creator: 'Jetbrains',
    category: Category.NETWORKING,
    description: 'Multiplatform asynchronous HTTP client for Kotlin.',
    stars: '14.3k+',
    latestVersion: '3.4.0',
    website: 'https://ktor.io/docs/client.html',
    implementation: {
      groovy: "implementation 'io.ktor:ktor-client-core:3.4.0'",
      kts: "implementation(\"io.ktor:ktor-client-core:3.4.0\")",
      versionCatalog: "ktor = \"3.4.0\"\nktor-client = { group = \"io.ktor\", name = \"ktor-client-core:\", version.ref = \"ktor\" }"
    },
    pros: ['Kotlin Multiplatform Support', 'Fully asynchronous', 'Highly customizable with plugins'],
    cons: ['Steeper learning curve than Retrofit', 'Verbose configuration'],
    alternatives: ['Retrofit', 'OkHttp'],
    commonIssues: [{ problem: "Missing Engine", fix: "Ensure an engine like Android, OkHttp, or CIO is provided to the client." }]
  },
  {
    id: 'okhttp',
    name: 'OkHttp',
    creator: 'Square',
    category: Category.NETWORKING,
    description: 'Square’s meticulous HTTP client for the JVM, Android, and GraalVM.',
    stars: '46.9k+',
    latestVersion: '5.3.2',
    website: 'https://square.github.io/okhttp/',
    implementation: {
      groovy: "implementation 'com.squareup.okhttp3:okhttp:5.3.2'",
      kts: "implementation(\"com.squareup.okhttp3:okhttp:5.3.2\")",
      versionCatalog: "okhttp = \"5.3.2\"\nokhttp = { group = \"com.squareup.okhttp3\", name = \"okhttp\", version.ref = \"okhttp\" }"
    },
    pros: ['HTTP/2 and WebSocket support', 'Automatic GZIP', 'Connection pooling'],
    cons: ['Very low-level', 'No built-in JSON parsing'],
    alternatives: ['Retrofit', 'Volley'],
    commonIssues: [{ problem: "Leakage", fix: "Close response bodies in a finally block or use .use {}." }]
  },
  {
    id: 'apollo-kotlin',
    name: 'Apollo Kotlin',
    creator: "Apollo GraphQL",
    category: Category.NETWORKING,
    description: 'Strongly-typed, caching GraphQL client for Java/KMP.',
    stars: '3.9k+',
    latestVersion: '4.4.0',
    website: 'https://www.apollographql.com/docs/kotlin/',
    implementation: {
      groovy: "implementation 'com.apollographql.apollo:apollo-runtime:4.4.0'",
      kts: "implementation(\"com.apollographql.apollo:apollo-runtime:4.4.0\")",
      versionCatalog: "apollo = \"4.4.0\"\napollo-runtime = { group = \"com.apollographql.apollo\", name = \"apollo-runtime\", version.ref = \"apollo\" }"
    },
    pros: ['Strong type safety', 'Normalized caching', 'KMP ready'],
    cons: ['Requires code generation', 'Schema synchronization overhead'],
    alternatives: ['Retrofit', 'Ktor'],
    commonIssues: [{ problem: "Code gen fails", fix: "Check schema path and ensure the Apollo Gradle plugin is correctly applied." }]
  },
  {
    id: 'scarlet',
    name: 'Scarlet',
    creator: "Tinder",
    category: Category.NETWORKING,
    description: 'A Retrofit-inspired WebSocket client for Kotlin.',
    stars: '3.3k+',
    latestVersion: '0.1.12',
    website: 'https://github.com/Tinder/Scarlet',
    implementation: {
      groovy: "implementation 'com.tinder.scarlet:scarlet:0.1.12'",
      kts: "implementation(\"com.tinder.scarlet:scarlet:0.1.12\")",
      versionCatalog: "scarlet = \"0.1.12\"\nscarlet = { group = \"com.tinder.scarlet\", name = \"scarlet\", version.ref = \"scarlet\" }"
    },
    pros: ['Declarative API', 'Lifecycle management', 'Reactive stream support'],
    cons: ['Beta status', 'Small community'],
    alternatives: ['OkHttp WebSockets'],
    commonIssues: [{ problem: "Disconnects", fix: "Use BackoffStrategy for reconnection logic." }]
  },

  // --- DEPENDENCY INJECTION ---
  {
    id: 'hilt',
    name: 'Hilt',
    creator: "Google",
    category: Category.DI,
    description: 'Standard DI library for Android, built on Dagger.',
    stars: 'Standard',
    latestVersion: '2.59',
    website: 'https://dagger.dev/hilt/',
    implementation: {
      groovy: "implementation 'com.google.dagger:hilt-android:2.59'",
      kts: "implementation(\"com.google.dagger:hilt-android:2.59\")",
      versionCatalog: "hilt = \"2.59\"\nhilt = { group = \"com.google.dagger\", name = \"hilt-android\", version.ref = \"hilt\" }"
    },
    pros: ['Standardized', 'ViewModel integration', 'Compile-time safety'],
    cons: ['Increases build times', 'Complex internals'],
    alternatives: ['Koin', 'Dagger 2'],
    commonIssues: [{ problem: "Missing @HiltAndroidApp", fix: "Ensure your Application class is annotated." }]
  },
  {
    id: 'koin',
    name: 'Koin',
    creator: "Replace",
    category: Category.DI,
    description: 'Pragmatic lightweight DI framework for Kotlin.',
    stars: '9.8k+',
    latestVersion: '4.1.1',
    website: 'https://insert-koin.io/',
    implementation: {
      groovy: "implementation 'io.insert-koin:koin-android:4.1.1'",
      kts: "implementation(\"io.insert-koin:koin-android:4.1.1\")",
      versionCatalog: "koin = \"4.1.1\"\nkoin = { group = \"io.insert-koin\", name = \"koin-android\", version.ref = \"koin\" }"
    },
    pros: ['No code generation', 'Simple DSL', 'Fast builds'],
    cons: ['Runtime dependency resolution', 'Performance cost for large graphs'],
    alternatives: ['Hilt', 'Kodein'],
    commonIssues: [{ problem: "DefinitionNotFoundException", fix: "Check if the module is included in startKoin." }]
  },
  {
    id: 'dagger2',
    name: 'Dagger 2',
    creator: "Google",
    category: Category.DI,
    description: 'A fast dependency injector for Java and Android.',
    stars: '17.7k+',
    latestVersion: '2.59',
    website: 'https://dagger.dev/',
    implementation: {
      groovy: "implementation 'com.google.dagger:dagger:2.59'",
      kts: "implementation(\"com.google.dagger:dagger:2.59\")",
      versionCatalog: "dagger = \"2.59\"\ndagger = { group = \"com.google.dagger\", name = \"dagger\", version.ref = \"dagger\" }"
    },
    pros: ['Zero runtime overhead', 'Perfect compile-time safety', 'Proven at scale'],
    cons: ['Extremely steep learning curve', 'High boilerplate'],
    alternatives: ['Hilt', 'Anvil'],
    commonIssues: [{ problem: "Component issues", fix: "Use Hilt to simplify common Dagger patterns." }]
  },

  // --- UI & ANIMATIONS ---
  {
    id: 'lottie',
    name: 'Lottie',
    creator: "AirBnb",
    category: Category.UI,
    description: 'Render After Effects animations natively.',
    stars: '35.6k+',
    latestVersion: '6.7.1',
    website: 'http://airbnb.io/lottie/',
    implementation: {
      groovy: "implementation 'com.airbnb.android:lottie:6.7.1'",
      kts: "implementation(\"com.airbnb.android:lottie:6.7.1\")",
      versionCatalog: "lottie = \"6.7.1\"\nlottie = { group = \"com.airbnb.android\", name = \"lottie\", version.ref = \"lottie\" }"
    },
    pros: ['Complex animations, small files', 'Interactive', 'Multi-platform'],
    cons: ['CPU intensive', 'Memory footprint'],
    alternatives: ['DotLottie'],
    commonIssues: [{ problem: "Not showing", fix: "Check if JSON is in 'raw' or 'assets' folder." }]
  },
  {
    id: 'shimmer',
    name: 'Shimmer-Android',
    creator: "Replace",
    category: Category.UI,
    description: 'An easy way to add a shimmer effect to any view.',
    stars: '15k+',
    latestVersion: '0.5.0',
    website: 'http://facebook.github.io/shimmer-android/',
    implementation: {
      groovy: "implementation 'com.facebook.shimmer:shimmer:0.5.0'",
      kts: "implementation(\"com.facebook.shimmer:shimmer:0.5.0\")",
      versionCatalog: "shimmer = \"0.5.0\"\nshimmer = { group = \"com.facebook.shimmer\", name = \"shimmer\", version.ref = \"shimmer\" }"
    },
    pros: ['Proven UI pattern', 'Low overhead', 'Simple API'],
    cons: ['Maintenance slowed down', 'Native View based'],
    alternatives: ['Accompanist Placeholder'],
    commonIssues: [{ problem: "Memory usage", fix: "Stop shimmer animation in onPause/onStop." }]
  },
  {
    id: 'balloon',
    name: 'Balloon',
    creator: "Skydoves",
    category: Category.UI,
    description: 'Modern, lightweight tooltips for Android.',
    stars: '3.9k+',
    latestVersion: '1.7.3',
    website: 'https://github.com/skydoves/balloon',
    implementation: {
      groovy: "implementation 'com.github.skydoves:balloon:1.7.3'",
      kts: "implementation(\"com.github.skydoves:balloon:1.7.3\")",
      versionCatalog: "balloon = \"1.7.3\"\nballoon = { group = \"com.github.skydoves\", name = \"balloon\", version.ref = \"balloon\" }"
    },
    pros: ['highly customizable', 'Lifecycle aware', 'Compose support'],
    cons: ['Additional dependency for simple tooltips'],
    alternatives: ['Material Tooltips'],
    commonIssues: [{ problem: "Positioning", fix: "Use .setArrowPosition() to align with anchor." }]
  },

  // --- DATABASE & PERSISTENCE ---
  {
    id: 'room',
    name: 'Room',
    creator: "Replace",
    category: Category.DATABASE,
    description: 'Standard SQLite abstraction for Android.',
    stars: 'Standard',
    latestVersion: '2.8.4',
    website: 'https://developer.android.com/training/data-storage/room',
    implementation: {
      groovy: "implementation 'androidx.room:room-runtime:2.8.4'",
      kts: "implementation(\"androidx.room:room-runtime:2.8.4\")",
      versionCatalog: "room = \"2.8.4\"\nroom = { group = \"androidx.room\", name = \"room-runtime\", version.ref = \"room\" }"
    },
    pros: ['Compile-time SQL validation', 'Coroutine support', 'Easy migrations'],
    cons: ['Boilerplate', 'Strict schema'],
    alternatives: ['SQLDelight'],
    commonIssues: [{ problem: "Main thread query", fix: "Use Coroutines or .allowMainThreadQueries() (avoid)." }]
  },
  {
    id: 'sqldelight',
    name: 'SQLDelight',
    creator: "Cashapp",
    category: Category.DATABASE,
    description: 'Generates Kotlin APIs from your SQL statements.',
    stars: '6.7k+',
    latestVersion: '2.2.1',
    website: 'https://cashapp.github.io/sqldelight/',
    implementation: {
      groovy: "implementation 'app.cash.sqldelight:android-driver:2.2.1'",
      kts: "implementation(\"app.cash.sqldelight:android-driver:2.2.1\")",
      versionCatalog: "sqldelight = \"2.2.1\"\nsqldelight = { group = \"app.cash.sqldelight\", name = \"android-driver\", version.ref = \"sqldelight\" }"
    },
    pros: ['SQL-first', 'KMP support', 'Zero boilerplate'],
    cons: ['Requires plugin setup', 'Manual SQL'],
    alternatives: ['Room'],
    commonIssues: [{ problem: "Plugin mismatch", fix: "Match Gradle plugin with runtime version." }]
  },

  // --- IMAGE LOADING ---
  {
    id: 'coil',
    name: 'Coil',
    creator: "Replace",
    category: Category.IMAGE_LOADING,
    description: 'Image loading backed by Kotlin Coroutines.',
    stars: '11.7k+',
    latestVersion: '3.3.0',
    website: 'https://coil-kt.github.io/coil/',
    implementation: {
      groovy: "implementation 'io.coil-kt.coil3:coil-compose:3.3.0'",
      kts: "implementation(\"io.coil-kt.coil3:coil-compose:3.3.0\")",
      versionCatalog: "coil = \"3.3.0\"\ncoil = { group = \"io.coil-kt.coil3\", name = \"coil-compose\", version.ref = \"coil\" }"
    },
    pros: ['Kotlin-first', 'Lightweight', 'Compose native'],
    cons: ['Smaller ecosystem than Glide'],
    alternatives: ['Glide', 'Picasso'],
    commonIssues: [{ problem: "Blurred images", fix: "Disable hardware bitmaps for transformations." }]
  },
  {
    id: 'glide',
    name: 'Glide',
    creator: "Bumptech",
    category: Category.IMAGE_LOADING,
    description: 'Fast and efficient open source media management framework.',
    stars: '35k+',
    latestVersion: '5.0.5',
    website: 'https://github.com/bumptech/glide',
    implementation: {
      groovy: "implementation 'com.github.bumptech.glide:glide:5.0.5'",
      kts: "implementation(\"com.github.bumptech.glide:glide:5.0.5\")",
      versionCatalog: "glide = \"5.0.5\"\nglide = { group = \"com.github.bumptech.glide\", name = \"glide\", version.ref = \"glide\" }"
    },
    pros: ['Fast scrolling', 'GIF/Video support', 'Huge plugin ecosystem'],
    cons: ['Complex custom code', 'Code gen requirements'],
    alternatives: ['Coil', 'Fresco'],
    commonIssues: [{ problem: "Memory pressure", fix: "Use .thumbnail() for low-res placeholders." }]
  },
  {
    id: 'fresco',
    name: 'Fresco',
    creator: "Facebook",
    category: Category.IMAGE_LOADING,
    description: 'A powerful system for displaying images in Android by Meta.',
    stars: '17.1k+',
    latestVersion: '3.6.0',
    website: 'https://frescolib.org/',
    implementation: {
      groovy: "implementation 'com.facebook.fresco:fresco:3.6.0'",
      kts: "implementation(\"com.facebook.fresco:fresco:3.6.0\")",
      versionCatalog: "fresco = \"3.6.0\"\nfresco = { group = \"com.facebook.fresco\", name = \"fresco\", version.ref = \"fresco\" }"
    },
    pros: ['Memory efficiency (Ashmem)', 'Progressive loading', 'WebP support'],
    cons: ['Heavy library size', 'Proprietary Drawee views'],
    alternatives: ['Glide', 'Coil'],
    commonIssues: [{ problem: "Initialization", fix: "Fresco.initialize(context) must be called once." }]
  },

  // --- UTILITIES ---
  {
    id: 'timber',
    name: 'Timber',
    creator: "JakeWharton",
    category: Category.UTILS,
    description: 'Extensible API for Android Log.',
    stars: '10.8k+',
    latestVersion: '5.0.1',
    website: 'https://github.com/JakeWharton/timber',
    implementation: {
      groovy: "implementation 'com.jakewharton.timber:timber:5.0.1'",
      kts: "implementation(\"com.jakewharton.timber:timber:5.0.1\")",
      versionCatalog: "timber = \"5.0.1\"\ntimber = { group = \"com.jakewharton.timber\", name = \"timber\", version.ref = \"timber\" }"
    },
    pros: ['Auto tagging', 'Prod-safe stripping', 'Clean API'],
    cons: ['Very basic'],
    alternatives: ['Napier'],
    commonIssues: [{ problem: "No logs", fix: "Plant DebugTree in Application onCreate." }]
  },
  {
    id: 'arrow',
    name: 'Arrow',
    creator: "Replace",
    category: Category.UTILS,
    description: 'Functional programming companion to Kotlin.',
    stars: '6.5k+',
    latestVersion: '2.2.1.1',
    website: 'https://arrow-kt.io/',
    implementation: {
      groovy: "implementation 'io.arrow-kt:arrow-core:2.2.1.1'",
      kts: "implementation(\"io.arrow-kt:arrow-core:2.2.1.1\")",
      versionCatalog: "arrow = \"2.2.1.1\"\narrow = { group = \"io.arrow-kt\", name = \"arrow-core\", version.ref = \"arrow\" }"
    },
    pros: ['Option/Either types', 'Typed errors', 'Immutability focus'],
    cons: ['Complex for beginners', 'Increases method count'],
    alternatives: ['Standard Kotlin Result'],
    commonIssues: [{ problem: "Verbosity", fix: "Use context receivers or typed error handling blocks." }]
  },

  // --- TESTING ---
  {
    id: 'mockk',
    name: 'MockK',
    creator: "Replace",
    category: Category.TESTING,
    description: 'Mocking library for Kotlin.',
    stars: '5.7k+',
    latestVersion: '1.14.9',
    website: 'https://mockk.io/',
    implementation: {
      groovy: "testImplementation 'io.mockk:mockk:1.14.9''",
      kts: "testImplementation(\"io.mockk:mockk:1.14.9'\")",
      versionCatalog: "mockk = \"1.14.9'\"\nmockk = { group = \"io.mockk\", name = \"mockk\", version.ref = \"mockk\" }"
    },
    pros: ['Kotlin-first', 'Final class mocking', 'Coroutine support'],
    cons: ['Slower than Mockito'],
    alternatives: ['Mockito'],
    commonIssues: [{ problem: "Static leak", fix: "unmockkAll() after tests." }]
  },

  // --- ARCHITECTURE ---
  {
    id: 'mavericks',
    name: 'Mavericks',
    creator: "Replace",
    category: Category.ARCHITECTURE,
    description: 'MVI state management by Airbnb.',
    stars: '5.9k+',
    latestVersion: '3.0.13',
    website: 'https://airbnb.io/mavericks/',
    implementation: {
      groovy: "implementation 'com.airbnb.android:mavericks:3.0.13'",
      kts: "implementation(\"com.airbnb.android:mavericks:3.0.13\")",
      versionCatalog: "mavericks = \"3.0.13\"\nmavericks = { group = \"com.airbnb.android\", name = \"mavericks\", version.ref = \"mavericks\" }"
    },
    pros: ['Predictable state', 'Large team scale', 'Rotation safe'],
    cons: ['Opinionated', 'Boilerplate'],
    alternatives: ['Orbit MVI'],
    commonIssues: [{ problem: "State loss", fix: "Make state Parcelable." }]
  },

  // --- DEVTOOLS ---
  {
    id: 'leakcanary',
    name: 'LeakCanary',
    creator: "Replace",
    category: Category.DEVTOOLS,
    description: 'Memory leak detection for Android.',
    stars: '29.9k+',
    latestVersion: '2.14',
    website: 'https://square.github.io/leakcanary/',
    implementation: {
      groovy: "debugImplementation 'com.squareup.leakcanary:leakcanary-android:2.14'",
      kts: "debugImplementation(\"com.squareup.leakcanary:leakcanary-android:2.14\")",
      versionCatalog: "leakcanary = \"2.14\"\nleakcanary = { group = \"com.squareup.leakcanary\", name = \"leakcanary-android\", version.ref = \"leakcanary\" }"
    },
    pros: ['Auto detection', 'Detailed traces', 'Zero config'],
    cons: ['Debug only'],
    alternatives: ['Studio Profiler'],
    commonIssues: [{ problem: "Freezes", fix: "Normal during heap dump; ignore for development." }]
  },
  {
    id: 'chucker',
    name: 'Chucker',
    creator: "Replace",
    category: Category.DEVTOOLS,
    description: 'On-device HTTP inspector.',
    stars: '4.4k+',
    latestVersion: '4.3.0',
    website: 'https://github.com/ChuckerTeam/chucker',
    implementation: {
      groovy: "debugImplementation 'com.github.chuckerteam.chucker:library:4.3.0'",
      kts: "debugImplementation(\"com.github.chuckerteam.chucker:library:4.3.0\")",
      versionCatalog: "chucker = \"4.3.0\"\nchucker = { group = \"com.github.chuckerteam.chucker\", name = \"library\", version.ref = \"chucker\" }"
    },
    pros: ['No PC sniffer needed', 'Easy log sharing', 'Secured activity'],
    cons: ['Increases debug APK size'],
    alternatives: ['Charles Proxy'],
    commonIssues: [{ problem: "Intercept fails", fix: "Add ChuckerInterceptor last in OkHttp." }]
  }
];
